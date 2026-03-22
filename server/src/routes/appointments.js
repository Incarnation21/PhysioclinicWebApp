const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const authMiddleware = require('../middleware/authMiddleware');

// @route   POST api/appointments
// @desc    Create a new appointment (Public)
// @access  Public
router.post('/', async (req, res) => {
    const { patientName, contactNumber, service, appointmentDate, appointmentTime, notes } = req.body;

    try {
        const newAppointment = new Appointment({
            patientName,
            contactNumber,
            service: service || 'General Consultation', // Default if not provided
            appointmentDate,
            appointmentTime: appointmentTime || '10:00 AM', // Default if not provided
            notes
        });

        const appointment = await newAppointment.save();
        res.json(appointment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/appointments
// @desc    Get all appointments
// @access  Private (Admin only)
router.get('/', authMiddleware, async (req, res) => {
    try {
        const appointments = await Appointment.find().sort({ createdAt: -1 });
        res.json(appointments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/appointments/:id
// @desc    Update appointment status/details
// @access  Private (Admin only)
router.put('/:id', authMiddleware, async (req, res) => {
    const { status, note, assignedTo } = req.body;

    // Build appointment object
    const appointmentFields = {};
    if (status) appointmentFields.status = status;
    if (note !== undefined) appointmentFields.notes = note; // Can append or replace notes
    if (assignedTo !== undefined) appointmentFields.assignedTo = assignedTo;

    try {
        let appointment = await Appointment.findById(req.params.id);

        if (!appointment) return res.status(404).json({ msg: 'Appointment not found' });

        appointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            { $set: appointmentFields },
            { new: true }
        );

        res.json(appointment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/appointments/:id
// @desc    Delete appointment
// @access  Private
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        let appointment = await Appointment.findById(req.params.id);

        if (!appointment) return res.status(404).json({ msg: 'Appointment not found' });

        await Appointment.findByIdAndDelete(req.params.id);

        res.json({ msg: 'Appointment removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
