-- Migration to add guest booking fields to the bookings table
ALTER TABLE bookings
ADD COLUMN full_name TEXT,
ADD COLUMN email TEXT,
ADD COLUMN session_date TIMESTAMP WITH TIME ZONE,
ALTER COLUMN amount DROP NOT NULL;
