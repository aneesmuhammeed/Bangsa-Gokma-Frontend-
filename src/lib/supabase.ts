import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Room = {
  id: string;
  title: string;
  description: string;
  price: number;
  capacity: number;
  image_url: string;
  created_at?: string;
};

export type Booking = {
  id: string;
  user_id: string;
  room_id: string;
  check_in: string;
  check_out: string;
  guests: number;
  total_price: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at: string;
};

export type User = {
  id: string;
  email: string;
  full_name: string | null;
  phone: string | null;
};

// Function to fetch rooms
export async function fetchRooms(): Promise<Room[]> {
  const { data, error } = await supabase
    .from('rooms')
    .select('*')
    .order('price', { ascending: true });

  if (error) {
    console.error('Error fetching rooms:', error);
    throw error;
  }

  return data || [];
}