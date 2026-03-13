require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail', // Or 'sendgrid', etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Use app password for Gmail
  }
});

app.post('/send-email', async (req, res) => {
  const { to, subject, html, text, from_name, attachments } = req.body;
  
  try {
    const mailOptions = {
      from: `Manisha-A Core <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text: text || '',
      html: html || `<p>From: ${from_name}</p><p>${text || ''}</p>`,
    };

    // Handle attachments (for PDF receipts)
    if (attachments && Array.isArray(attachments)) {
      mailOptions.attachments = attachments.map(att => ({
        filename: att.filename,
        path: att.path // Data URI
      }));
    }

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Transmission successful' });
  } catch (error) {
    console.error('Core Link Error:', error);
    res.status(500).json({ success: false, error: 'Transmission signal lost' });
  }
});

// AI Chat Interface Route
app.post('/chat', async (req, res) => {
    const { message } = req.body;
    
    if (!message) {
        return res.status(400).json({ response: 'Please transmit data.', status: 'error' });
    }

    const systemPrompt = "You are the Manisha-A System Interface, an advanced AI operating system for Manisha-A. Founders: Manisha (CEO) and Arunesh (CTO). Tone: Futuristic, professional, slightly robotic. Format: Concise with HTML line breaks if needed.";
    const apiKey = process.env.GEMINI_API_KEY;
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{
            parts: [{ text: `${systemPrompt}\n\nUser Query: ${message}` }]
        }]
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'System processing error.';
        res.json({ response: aiText.replace(/\n/g, '<br>') });
    } catch (error) {
        console.error('AI Link Error:', error);
        res.status(500).json({ response: 'System Alert: Unable to connect to AM-COMPANY core.' });
    }
});

// Status Route
app.get('/status', (req, res) => {
    res.json({ 
        status: 'ONLINE', 
        modules: ['TRANS-LINK', 'CORE-AI', 'AUTH-VERIFY'],
        timestamp: new Date().toISOString()
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
