-- Enable required extension
create extension if not exists "pgcrypto";

-- Users table
create table if not exists users (
  id uuid primary key default auth.uid(),
  email text unique not null,
  full_name text,
  phone text,
  created_at timestamptz default now()
);

-- Rooms table
create table if not exists rooms (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  price numeric not null,
  capacity int not null,
  image_url text,
  created_at timestamptz default now()
);

-- Bookings table
create table if not exists bookings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade not null,
  room_id uuid references rooms(id) on delete cascade not null,
  check_in date not null,
  check_out date not null,
  guests int not null,
  total_price numeric not null,
  status text default 'pending' check (status in ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz default now()
);

-- Enable RLS
alter table users enable row level security;
alter table rooms enable row level security;
alter table bookings enable row level security;

-- Users policies
create policy "Users can view their data" on users
  for select using (auth.uid() = id);

create policy "Users can update their data" on users
  for update using (auth.uid() = id);

-- Rooms policies
create policy "Anyone can view rooms" on rooms
  for select using (true);

-- Bookings policies
create policy "Users can view their bookings" on bookings
  for select using (auth.uid() = user_id);

create policy "Users can insert their bookings" on bookings
  for insert with check (auth.uid() = user_id);

create policy "Users can update their bookings" on bookings
  for update using (auth.uid() = user_id);

-- Sample rooms
insert into rooms (title, description, price, capacity, image_url) values
  ('Deluxe Valley View', 'Spacious room with stunning valley views, private bathroom, and modern amenities', 4500, 2, 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80'),
  ('Premium Suite', 'Luxurious suite with separate living area, balcony, and premium amenities', 6500, 3, 'https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80'),
  ('Family Room', 'Perfect for families, featuring two bedrooms and a spacious living area', 7500, 4, 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80');
