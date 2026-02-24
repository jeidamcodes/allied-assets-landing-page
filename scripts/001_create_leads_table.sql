-- Create leads table for capturing form submissions
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_address TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  situation TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public lead form, no auth required)
CREATE POLICY "Allow anonymous inserts" ON public.leads
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated/service role can read leads (for admin follow-up)
CREATE POLICY "Allow service role to read leads" ON public.leads
  FOR SELECT
  USING (auth.role() = 'service_role');
