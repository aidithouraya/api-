// models/Report.js

const mongoose =require('mongoose');

const reportSchema = new mongoose.Schema({
    deviceName: {
        type: String,
        required: true
    },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    deviceId: { type: mongoose.Schema.Types.ObjectId, required: true },
    rapport: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Report', reportSchema);
