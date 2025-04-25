-- USERS TABLE
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT auth.uid(),
  email text UNIQUE NOT NULL,
  full_name text,
  phone text,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
);



-- INSERT INTO users (id, email, full_name, phone)
-- VALUES (gen_random_uuid(), 'testemail@gmail.com', 'Testy Test', '1234567890');

-- -- TEMPORARY: Allow public access to all users (only for testing)
-- CREATE POLICY "Allow public read of users"
-- ON users
-- FOR SELECT
-- USING (true);


-- -- Enable http extension if not already
-- create extension if not exists http;

-- -- Function to call your backend on user insert
-- create or replace function notify_new_user()
-- returns trigger as $$
-- declare
--   payload json;
-- begin
--   payload := json_build_object('user_id', NEW.id);
--   perform
--     http_post(
--       url := 'https://backend123-jbvg.onrender.com/login',
--       headers := json_build_object('Content-Type', 'application/json'),
--       body := payload
--     );
--   return NEW;
-- end;
-- $$ language plpgsql;

-- -- Trigger on users table
-- create trigger on_new_user
-- after insert on users
-- for each row execute function notify_new_user();



-- ROOMS TABLE
CREATE TABLE rooms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  price numeric NOT NULL,
  capacity int NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now()
);

-- BOOKINGS TABLE
CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  room_id uuid REFERENCES rooms(id) ON DELETE CASCADE NOT NULL,
  check_in date NOT NULL,
  check_out date NOT NULL,
  guests int NOT NULL,
  total_price numeric NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

-- ENABLE RLS FIRST
ALTER TABLE users ENABLEABLE ROW LEVEL SECURITY;
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- USERS POLICIES
CREATE POLICY "Users can view own data" ON users
  FOR SELECT TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE TO authenticated
  USING (auth.uid() = id);

-- ROOMS POLICIES
CREATE POLICY "Anyone can view rooms" ON rooms
  FOR SELECT TO authenticated
  USING (true);

-- BOOKINGS POLICIES
CREATE POLICY "Users can view own bookings" ON bookings
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create bookings" ON bookings
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own bookings" ON bookings
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id);

-- SAMPLE ROOMS
INSERT INTO rooms (title, description, price, capacity, image_url) VALUES
  ('Deluxe Valley View', 'Spacious room with stunning valley views, private bathroom, and modern amenities', 4500, 2, 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80'),
  ('Premium Suite', 'Luxurious suite with separate living area, balcony, and premium amenities', 6500, 3, 'https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80'),
  ('Family Room', 'Perfect for families, featuring two bedrooms and a spacious living area', 7500, 4, 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80');

-- EMAIL TRIGGER: Requires an Edge Function deployed as `/sendBookingEmail`
CREATE TRIGGER booking_email_trigger
AFTER INSERT ON bookings
FOR EACH ROW
EXECUTE FUNCTION supabase_functions.http_request(
  'sendBookingEmail',
  json_build_object(
    'user_email', (SELECT email FROM users WHERE id = NEW.user_id),
    'full_name', (SELECT full_name FROM users WHERE id = NEW.user_id),
    'check_in', NEW.check_in,
    'check_out', NEW.check_out
  )
);


