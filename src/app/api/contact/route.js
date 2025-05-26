
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASS,   
      },
    });

    await transporter.sendMail({
     from: process.env.EMAIL_USER,
  to: process.env.EMAIL_TO,
  subject: `New Contact Form Submission from ${name}`,
  text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  replyTo: email,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
