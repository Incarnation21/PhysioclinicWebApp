const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const authMiddleware = require('../middleware/authMiddleware');

// @route   POST api/contacts
// @desc    Submit a new contact message (Public)
// @access  Public
router.post('/', async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    try {
        const newContact = new Contact({ name, email, phone, subject, message });
        const contact = await newContact.save();
        res.json(contact);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/contacts
// @desc    Get all contact messages
// @access  Private (Admin only)
router.get('/', authMiddleware, async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
