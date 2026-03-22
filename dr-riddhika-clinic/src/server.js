// filepath: c:\Users\krish\OneDrive\Desktop\test 2\test 3\dr-riddhika-clinic\src\server.js
const express = require('express');
const bodyParser = require('body-parser');
const sendAppointmentEmail = require('./services/emailService');

const app = express();
app.use(bodyParser.json());

app.post('/api/appointments', async (req, res) => {
    const { name, age, message } = req.body;

    try {
        await sendAppointmentEmail({ name, age, message });
        res.status(200).send('Appointment request sent successfully!');
    } catch (error) {
        res.status(500).send('Failed to send appointment request.');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});