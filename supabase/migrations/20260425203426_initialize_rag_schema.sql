-- 1. Enable Vector Support for RAG
CREATE EXTENSION IF NOT EXISTS vector;

-- 2. Profiles Table (Auth Sync)
CREATE TABLE public.profiles (
  id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL PRIMARY KEY,
  full_name text,
  avatar_url text,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- 3. Documents Table (Metadata for PDFs/Notes)
CREATE TABLE public.documents (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  file_url text,
  type text CHECK (type IN ('pdf', 'note')),
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- 4. Chunks Table (The Vector Store)
CREATE TABLE public.chunks (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  document_id uuid REFERENCES public.documents(id) ON DELETE CASCADE NOT NULL,
  content text NOT NULL,
  embedding vector(768), -- Optimized for Google Text Embedding 004
  metadata jsonb,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- 5. Conversations & Messages (Chat History)
CREATE TABLE public.conversations (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

CREATE TABLE public.messages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id uuid REFERENCES public.conversations(id) ON DELETE CASCADE NOT NULL,
  role text CHECK (role IN ('user', 'assistant')),
  content text NOT NULL,
  sources jsonb,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now())
);

-- 6. Performance Indexing
CREATE INDEX ON public.chunks USING hnsw (embedding vector_cosine_ops);
CREATE INDEX ON public.chunks (document_id);
CREATE INDEX ON public.messages (conversation_id);

-- 7. Enable RLS (Row Level Security)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chunks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
