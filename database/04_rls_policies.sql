-- 04_rls_policies.sql
-- Enable Row Level Security (RLS) across all primary tables

-- 1. ENABLE RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE workshops ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- 2. PUBLIC READ ACCESS
-- Allow anyone to select active services and workshops structure
CREATE POLICY "Allow public read access on services" ON services FOR SELECT USING (true);
CREATE POLICY "Allow public read access on workshops" ON workshops FOR SELECT USING (true);
-- (testimonials already has RLS set in 03_testimonials_and_fixes.sql, but ensuring here doesn't hurt)
-- We'll assume testimonials is fine.

-- 3. PUBLIC INSERT ACCESS
-- Allow public to submit bookings, inquiries, and newsletter signups
CREATE POLICY "Allow public insert on bookings" ON bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert on contact_messages" ON contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert on newsletter_subscribers" ON newsletter_subscribers FOR INSERT WITH CHECK (true);

-- 4. ADMIN ONLY ACCESS (service_role)
-- The `service_role` key bypasses RLS by default. To strictly restrict UPDATE/DELETE to service_role,
-- we just don't grant UPDATE or DELETE to PUBLIC.
-- Hence, only authenticated admins (via Next.js backend holding the service_role key) can mutate data.

-- Note: We do not add any UPDATE or DELETE policies for PUBLIC.
