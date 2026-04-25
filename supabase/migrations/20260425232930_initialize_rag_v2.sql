-- ==========================================
-- 0. EXTENSIONS & FUNCTIONS
-- ==========================================
CREATE EXTENSION IF NOT EXISTS vector;

-- Automated Updated_At Function
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ==========================================
-- 1. CORE TABLES
-- ==========================================

-- PROFILES: Unified User/Admin Table
CREATE TABLE public.profiles (
  id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL PRIMARY KEY,
  full_name text,
  avatar_url text,
  role text NOT NULL DEFAULT 'user' CHECK (role IN ('admin','user')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- AI_MODELS: System Catalog
CREATE TABLE public.ai_models (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  provider text NOT NULL,
  model_type text NOT NULL CHECK (model_type IN ('chat','embedding')),
  model_id text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

-- USER_MODEL_KEYS: Encrypted API Keys
CREATE TABLE public.user_model_keys (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  model_id uuid NOT NULL REFERENCES public.ai_models(id) ON DELETE CASCADE,
  encrypted_key text NOT NULL,
  iv text NOT NULL,
  auth_tag text NOT NULL,
  is_default boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, model_id)
);

-- PROJECTS: Ownership Root
CREATE TABLE public.projects (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- DOCUMENTS: File Metadata
CREATE TABLE public.documents (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id uuid NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  title text NOT NULL,
  file_url text NOT NULL,
  file_type text NOT NULL,
  file_size bigint,
  created_at timestamptz DEFAULT now()
);

-- CHUNKS: RAG Vector Store
CREATE TABLE public.chunks (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  document_id uuid NOT NULL REFERENCES public.documents(id) ON DELETE CASCADE,
  chunk_index integer NOT NULL,
  content text NOT NULL,
  token_count integer,
  embedding vector(768), -- Optimized for Google Text Embedding 004
  created_at timestamptz DEFAULT now()
);

-- CONVERSATIONS: Chat Sessions
CREATE TABLE public.conversations (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id uuid NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  title text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- MESSAGES: Individual Chat Items
CREATE TABLE public.messages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id uuid NOT NULL REFERENCES public.conversations(id) ON DELETE CASCADE,
  role text NOT NULL CHECK (role IN ('user','assistant','system')),
  content text NOT NULL,
  model_id uuid REFERENCES public.ai_models(id),
  token_count integer,
  created_at timestamptz DEFAULT now()
);

-- ==========================================
-- 2. PERFORMANCE INDEXING
-- ==========================================
CREATE INDEX idx_chunks_embedding ON public.chunks USING hnsw (embedding vector_cosine_ops);
CREATE INDEX idx_chunks_doc_id ON public.chunks(document_id);
CREATE INDEX idx_documents_project_id ON public.documents(project_id);
CREATE INDEX idx_conversations_project_id ON public.conversations(project_id);
CREATE INDEX idx_messages_conv_id ON public.messages(conversation_id);
CREATE INDEX idx_messages_model_id ON public.messages(model_id);
CREATE INDEX idx_projects_user_id ON public.projects(user_id);
CREATE INDEX idx_user_model_keys_model_id ON public.user_model_keys(model_id);

-- ==========================================
-- 3. AUTOMATION (TRIGGERS)
-- ==========================================

-- Trigger: Handle New User Signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
DECLARE
  is_admin_email boolean;
BEGIN
  -- Bootstrap admin role for specific email
  is_admin_email := (new.email = 'abdullah.mughni1999@gmail.com');

  INSERT INTO public.profiles (id, full_name, avatar_url, role)
  VALUES (
    new.id, 
    new.raw_user_meta_data->>'full_name', 
    new.raw_user_meta_data->>'avatar_url', 
    CASE WHEN is_admin_email THEN 'admin' ELSE 'user' END
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Trigger: Update Timestamps
CREATE TRIGGER trg_profiles_updated_at BEFORE UPDATE ON profiles FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER trg_user_model_keys_updated_at BEFORE UPDATE ON user_model_keys FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER trg_projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ==========================================
-- 4. SECURITY & RLS POLICIES
-- ==========================================

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_models ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_model_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chunks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Shared Admin Check Function
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role = 'admin'
  );
$$ LANGUAGE sql SECURITY DEFINER;

-- PROFILES POLICIES
CREATE POLICY "Users view/update own profile" ON profiles 
  FOR ALL USING (auth.uid() = id) WITH CHECK (auth.uid() = id);
CREATE POLICY "Admins read all profiles" ON profiles 
  FOR SELECT USING (is_admin());

-- AI_MODELS POLICIES
CREATE POLICY "Anyone view models" ON ai_models FOR SELECT USING (auth.uid() IS NOT NULL);
CREATE POLICY "Admins manage models" ON ai_models FOR ALL USING (is_admin());

-- USER_MODEL_KEYS POLICIES
CREATE POLICY "Users manage own keys" ON user_model_keys FOR ALL USING (user_id = auth.uid());
CREATE POLICY "Admins read key metadata" ON user_model_keys FOR SELECT USING (is_admin());
-- Security: Hide secret columns from 'authenticated' role
REVOKE SELECT (encrypted_key, iv, auth_tag) ON user_model_keys FROM authenticated;
GRANT SELECT (id, user_id, model_id, is_default, created_at, updated_at) ON user_model_keys TO authenticated;

-- PROJECTS POLICIES
CREATE POLICY "Users manage own projects" ON projects FOR ALL USING (user_id = auth.uid());
CREATE POLICY "Admins read all projects" ON projects FOR SELECT USING (is_admin());

-- DOCUMENTS POLICIES
CREATE POLICY "Users manage project documents" ON documents FOR ALL 
  USING (EXISTS (SELECT 1 FROM projects p WHERE p.id = documents.project_id AND p.user_id = auth.uid()));
CREATE POLICY "Admins read all documents" ON documents FOR SELECT USING (is_admin());

-- CHUNKS POLICIES
CREATE POLICY "Users access document chunks" ON chunks FOR ALL 
  USING (EXISTS (SELECT 1 FROM documents d JOIN projects p ON p.id = d.project_id WHERE d.id = chunks.document_id AND p.user_id = auth.uid()));
CREATE POLICY "Admins read all chunks" ON chunks FOR SELECT USING (is_admin());

-- CONVERSATIONS POLICIES
CREATE POLICY "Users manage conversations" ON conversations FOR ALL 
  USING (EXISTS (SELECT 1 FROM projects p WHERE p.id = conversations.project_id AND p.user_id = auth.uid()));
CREATE POLICY "Admins read all conversations" ON conversations FOR SELECT USING (is_admin());

-- MESSAGES POLICIES
CREATE POLICY "Users manage messages" ON messages FOR ALL 
  USING (EXISTS (SELECT 1 FROM conversations c JOIN projects p ON p.id = c.project_id WHERE c.id = messages.conversation_id AND p.user_id = auth.uid()));
CREATE POLICY "Admins read all messages" ON messages FOR SELECT USING (is_admin());
