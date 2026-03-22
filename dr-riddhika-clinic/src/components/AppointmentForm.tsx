// filepath: c:\Users\krish\OneDrive\Desktop\test 2\test 3\dr-riddhika-clinic\src\components\AppointmentForm.tsx
import React, { useState } from 'react';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({ name: '', age: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/appointments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Appointment request sent!');
            } else {
                alert('Failed to send appointment request.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
            <textarea name="message" placeholder="Message" onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AppointmentForm;