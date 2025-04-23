// import express from 'express';
// import cors from 'cors';
// import nodemailer from 'nodemailer';
// import { createClient } from '@supabase/supabase-js';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);  // Changed SUPABASE_KEY to SUPABASE_ANON_KEY

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   }
// });

// app.post('/send-booking-email', async (req, res) => {
//   const { booking_id } = req.body;

//   // Fetch booking details from Supabase
//   const { data: booking, error: bookingError } = await supabase
//     .from('bookings')
//     .select('*, users(email, full_name), rooms(title)')
//     .eq('id', booking_id)
//     .single();

//   if (bookingError || !booking) {
//     return res.status(500).json({ error: bookingError?.message || 'Booking not found' });
//   }

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: booking.users.email,
//     subject: 'Your Booking Confirmation',
//     text: `Hi ${booking.users.full_name},\n\nYour booking for "${booking.rooms.title}" from ${booking.check_in} to ${booking.check_out} has been confirmed.`
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.json({ message: 'Email sent' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to send email' });
//   }
// });

// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });
