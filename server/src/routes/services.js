const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const authMiddleware = require('../middleware/authMiddleware');

// @route   GET api/services
// @desc    Get all services
// @access  Public
router.get('/', async (req, res) => {
    try {
        const services = await Service.find({ isActive: true });
        res.json(services);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/services
// @desc    Create a service
// @access  Private (Admin only)
router.post('/', authMiddleware, async (req, res) => {
    const { title, description, icon } = req.body;

    try {
        const newService = new Service({
            title,
            description,
            icon
        });

        const service = await newService.save();
        res.json(service);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
