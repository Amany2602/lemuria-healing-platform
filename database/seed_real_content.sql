-- Seed Real Content from Lemuria Healing Website

-- Clear existing data (optional, but good for clean state)
-- TRUNCATE services, workshops, testimonials CASCADE;

-- Insert Services
INSERT INTO services (id, name, description, price, duration_minutes)
VALUES
  (
    gen_random_uuid(),
    'Kinesiology',
    'Gentle kinesiology sessions to release stress, restore balance, and support your physical, emotional, and energetic wellbeing. Sessions are personalised and may include meridian and chakra balancing, therapeutic essential oils, and more.',
    150.00,
    60
  ),
  (
    gen_random_uuid(),
    'Angel Touch',
    'A technique felt through every system of the body, working magic mentally, emotionally, physically and spiritually. Uses feather touch and nine pure life-force therapeutic grade essential oils to dial down the nervous system.',
    150.00,
    60
  ),
  (
    gen_random_uuid(),
    'Sensory Escape - Aromatherapy',
    'A nurturing journey with 14 exquisite therapeutic grade essential oils, gentle energy work, and soothing sounds. Designed to melt away stress and restore your natural clarity and calm.',
    195.00,
    60
  ),
  (
    gen_random_uuid(),
    'Crystal Diamond Light',
    'A pure heart-felt channelling receiving high vibrations of love and light. Includes an interactive session for guidance and uses crystals, essential oils, and sound to amplify support.',
    250.00,
    90
  ),
  (
    gen_random_uuid(),
    'Sound Healing Group Session',
    'Deeply relaxing group sound healing immersion to release stress and restore balance. Uses crystal bowls, Tibetan singing bowls, gongs, and planetary harmonics.',
    40.00,
    75
  );

-- Insert Testimonials
INSERT INTO testimonials (name, testimonial)
VALUES
  ('Missy, VIC', 'Thank you for bringing so much joy, love and understanding into my life... I feel stronger to strength in all areas of my life. Jenny you are a superstar!'),
  ('Donna, WA', 'I highly recommend Jenny as a practitioner... Her energy is absolutely amazing. I will definitely be back.'),
  ('Tash, WA', 'I cannot thank Jenny enough for the very powerful integration session... accurately connected into my energy and my guides.'),
  ('Ngarie, WA', 'I loved coming in and having a Diamond light balance. I felt so overwhelmed in so many areas of my life, I left feeling like I completely understood so much more.'),
  ('Hannah, WA', 'Hi Jenny, I’m feeling wonderful actually! It’s hard to explain- more relaxed and just letting things flow without worrying so much.'),
  ('Jane, WA', 'Hello lovely, Yes I’m feeling pretty good. Motivated, calm, energised... I feel very connected and protected by new energies around me.'),
  ('Hayley G, NSW', 'Hey Jenny! Wow I am shifting a lot, I feel weird but good. I have been very tired but in a balanced way... everything seems easier, work, human interactions, life!'),
  ('Mavra, WA', 'Dear Jenny! I really need to thank you again: the healing you performed on me is still unraveling. Every missing bit of the puzzle is moving into place.'),
  ('Sharon L, WA', 'Today I had an amazing Emotional Clearing technique with the wonderful Jenny! What a brilliant experience! Jenny has an intuitive understanding that is really special.'),
  ('Kylie B, WA', 'I recently experienced the transformational Egyptian emotional clearing session with Jenny, and it was truly enlightening. I left feeling a profound sense of clarity and relief.');

-- Insert initial Workshop
INSERT INTO workshops (id, title, description, date, capacity, price)
VALUES
  (
    gen_random_uuid(),
    'Next Workshop Coming Soon',
    'Join our waitlist to be the first to know about our next sacred healing workshop.',
    '2026-04-15 18:30:00+00',
    20,
    0.00
  );
