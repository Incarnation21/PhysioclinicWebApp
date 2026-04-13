require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL || '*', // Set CLIENT_URL in Render to your Hostinger domain
    credentials: true
}));
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/physio-clinic')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Routes
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/appointments', require('./src/routes/appointments'));
app.use('/api/contacts', require('./src/routes/contacts'));
app.use('/api/services', require('./src/routes/services'));

app.get('/', (req, res) => {
    res.send('Dr. Riddhika’s Physiotherapy Clinic API');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
