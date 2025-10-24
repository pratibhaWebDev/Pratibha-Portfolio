const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Contact = require('./models/Contact');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Allow both localhost and 127.0.0.1
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Connect to database
connectDB();

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend API is running!' });
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Create new contact entry
    const contact = new Contact({
      name,
      email,
      subject,
      message,
      createdAt: new Date()
    });

    await contact.save();
    
    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully!',
      data: contact 
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

// Get all contacts (for admin purposes)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Server is healthy',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
