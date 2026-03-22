require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./src/models/User');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/physio-clinic')
    .then(async () => {
        console.log('Connected to DB');
        const existing = await User.findOne({ username: 'admin' });
        if (!existing) {
            const admin = new User({
                username: 'admin',
                password: 'password123',
                role: 'admin'
            });
            await admin.save();
            console.log('Admin user created: admin / password123');
        } else {
            console.log('Admin user already exists');
        }
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
