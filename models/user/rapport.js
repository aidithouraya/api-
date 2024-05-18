// models/Report.js

import mongoose from 'mongoose';

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

const Report = mongoose.model('Report', reportSchema);
export default Report;
