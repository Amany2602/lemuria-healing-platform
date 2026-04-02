-- Add Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  testimonial TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Fix Services table if needed
-- Some environments might be missing duration_minutes or using different column names
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='services' AND column_name='duration_minutes') THEN
        ALTER TABLE services ADD COLUMN duration_minutes INTEGER DEFAULT 60;
    END IF;
END $$;

-- Enable RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Add policies
CREATE POLICY "Allow public read-only access on testimonials" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Allow admin full access on testimonials" ON testimonials FOR ALL USING (true);
