-- Seed Core Services Data
-- These are the premium healing services for Lemuria Healing Platform

-- Services
INSERT INTO services (id, name, description, price, duration_minutes)
VALUES
  (
    gen_random_uuid(),
    'Sound Healing Session',
    'A deeply immersive experience using Tibetan singing bowls and crystal harmonics to realign your cellular resonance and restore nervous system balance.',
    150.00,
    75
  ),
  (
    gen_random_uuid(),
    'Crystal Alignment Therapy',
    'Experience the profound energy of master crystals placed on key meridian points to clear energetic blockages and calibrate your subtle light body.',
    185.00,
    90
  ),
  (
    gen_random_uuid(),
    'Energy Recalibration',
    'A powerful biofield adjustment using high-frequency transmissions and hands-on healing to restore the flow of universal life force through your chakra system.',
    220.00,
    60
  ),
  (
    gen_random_uuid(),
    'Chakra Resonance Therapy',
    'Harmonize your energy centers through a specialized combination of sound frequencies, color visualization, and intentional breathwork.',
    165.00,
    60
  ),
  (
    gen_random_uuid(),
    'Sacred Breathwork Journey',
    'A guided somatic journey using conscious connected breathing to access expanded states of awareness and release stored emotional density.',
    195.00,
    120
  ),
  (
    gen_random_uuid(),
    'Quantum Frequency Reset',
    'Our most advanced session utilizing quantum-attuned technology and intuitive guidance to reset your energetic blueprint for rapid transformation.',
    250.00,
    90
  );

-- Workshops
INSERT INTO workshops (id, title, description, date, capacity, price)
VALUES
  (
    gen_random_uuid(),
    'High Frequency Sound Sanctuary',
    'Journey through ceremonial cacao medicine and a deep cellular sound healing immersion using alchemical crystal bowls and planetary gongs to reset your nervous system.',
    NOW() + INTERVAL '12 days',
    20,
    85.00
  ),
  (
    gen_random_uuid(),
    'Full Moon Feminine Awakening Circle',
    'A powerful monthly gathering under the Full Moon to honor the sacred feminine, release what no longer serves, and align with the abundant lunar energies.',
    NOW() + INTERVAL '18 days',
    15,
    65.00
  ),
  (
    gen_random_uuid(),
    'Quantum Breathwork Intensive',
    'A half-day deep-dive into the science and art of conscious connected breathing. Includes somatic journey and integration circle.',
    NOW() + INTERVAL '25 days',
    12,
    125.00
  );
