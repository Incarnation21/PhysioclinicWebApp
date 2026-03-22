const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    icon: {
        type: String, // Can be an icon name or URL
        default: 'Activity'
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Service', serviceSchema);
