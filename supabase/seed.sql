-- Seed AI Models
INSERT INTO public.ai_models (name, provider, model_type, model_id, description)
VALUES 
  ('Gemini 1.5 Flash', 'google', 'chat', 'gemini-1.5-flash', 'Fast and versatile multimodal model for scaling across diverse tasks.'),
  ('Gemini 1.5 Pro', 'google', 'chat', 'gemini-1.5-pro', 'Most capable multimodal model with a 128k context window.'),
  ('Text Embedding 004', 'google', 'embedding', 'text-embedding-004', 'Optimized for semantic search and retrieval (768 dimensions).')
ON CONFLICT (id) DO NOTHING;
