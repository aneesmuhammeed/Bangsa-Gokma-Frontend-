/*
  # Initial Schema Setup for Guest House Management

  1. New Tables
    - `users`
      - `id` (uuid, primary key) - User's unique identifier
      - `email` (text) - User's email address
      - `full_name` (text) - User's full name
      - `phone` (text) - User's phone number
      - `created_at` (timestamp) - Account creation timestamp
    
    - `rooms`
      - `id` (uuid, primary key) - Room's unique identifier
      - `title` (text) - Room name/title
      - `description` (text) - Room description
      - `price` (numeric) - Room price per night
      - `capacity` (int) - Maximum number of guests
      - `image_url` (text) - URL to room image
      - `created_at` (timestamp) - Room creation timestamp
    
    - `bookings`
      - `id` (uuid, primary key) - Booking's unique identifier
      - `user_id` (uuid) - Reference to users table
      - `room_id` (uuid) - Reference to rooms table
      - `check_in` (date) - Check-in date
      - `check_out` (date) - Check-out date
      - `guests` (int) - Number of guests
      - `total_price` (numeric) - Total booking price
      - `status` (text) - Booking status (pending, confirmed, cancelled)
      - `created_at` (timestamp) - Booking creation timestamp

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Secure booking management
*/

-- Create users table
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT auth.uid(),
  email text UNIQUE NOT NULL,
  full_name text,
  phone text,
  created_at timestamptz DEFAULT now()
);

-- Create rooms table
CREATE TABLE rooms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  price numeric NOT NULL,
  capacity int NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now()
);

-- Create bookings table
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

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Policies for users table
CREATE POLICY "Users can view own data" ON users
  FOR SELECT TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE TO authenticated
  USING (auth.uid() = id);

-- Policies for rooms table
CREATE POLICY "Anyone can view rooms" ON rooms
  FOR SELECT TO authenticated
  USING (true);

-- Policies for bookings table
CREATE POLICY "Users can view own bookings" ON bookings
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create bookings" ON bookings
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own bookings" ON bookings
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id);

-- Insert sample rooms
INSERT INTO rooms (title, description, price, capacity, image_url) VALUES
  ('Deluxe Valley View', 'Spacious room with stunning valley views, private bathroom, and modern amenities', 4500, 2, 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80'),
  ('Premium Suite', 'Luxurious suite with separate living area, balcony, and premium amenities', 6500, 3, 'https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80'),
  ('Family Room', 'Perfect for families, featuring two bedrooms and a spacious living area', 7500, 4, 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80');