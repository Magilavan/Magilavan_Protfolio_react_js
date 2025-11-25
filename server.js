require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// Email transporter (Gmail SMTP) - if EMAIL_USER/PASS not provided in development,
// create an Ethereal test account (nodemailer) so developers can test email sending
let transporter;
(async () => {
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  } else if (process.env.NODE_ENV === 'development') {
    try {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      });
      console.log('Using Ethereal test account for email testing (development).');
    } catch (err) {
      console.error('Failed to create Ethereal test account:', err);
    }
  } else {
    // production without credentials — leave transporter undefined so send route can fail safely
    transporter = null;
  }
})();

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  // Email options
  // Use authenticated sender as `from` (many SMTP providers require this).
  // Use `replyTo` so replies go to the visitor's email.
  const mailOptions = {
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER || 'no-reply@example.com',
    replyTo: email,
    to: process.env.EMAIL_TO || 'mmagilavan98@gmail.com',
    subject: `Portfolio Contact from ${name}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    // If using Ethereal in development, provide the preview URL to the console and client
    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      console.log('Preview URL:', previewUrl);
    }
    console.log(`Email sent from ${name} (${email})`);
    console.log('Message ID:', info.messageId);
    // In development include preview URL in response for easier testing
    if (process.env.NODE_ENV === 'development' && previewUrl) {
      return res.json({ success: true, message: 'Message sent (preview available).', previewUrl });
    }
    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    // In development return the error message to the client to aid debugging.
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact form data:', { name, email, message });
      return res.status(500).json({ error: error.message || String(error) });
    }

    // In production, don't leak internal error details to the client.
    res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// For production builds only
if (process.env.NODE_ENV === 'production') {
  // Serve static files
  app.use(express.static(path.join(__dirname, 'build')));
  
  // Handle React routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});