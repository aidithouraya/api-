const mongoose = require('mongoose');
const { Schema } = mongoose;

const CompteurIoTSchema = new Schema(
    {
        idslave: { type: Number },
        created_at: { type: Date, required: true },
        voltage1: { type: Number },
        current1: { type: Number },
        power1: { type: Number },
        frequency1: { type: Number },
        pf1: { type: Number },
        voltage2: { type: Number },
        current2: { type: Number },
        power2: { type: Number },
        frequency2: { type: Number },
        pf2: { type: Number },
        voltage3: { type: Number },
        current3: { type: Number },
        power3: { type: Number },
        frequency3: { type: Number },
        pf3: { type: Number },
        humidity: { type: Number },
        temperature: { type: Number },
        gasConcentration: { type: Number },
        user: { type: Schema.ObjectId, ref: 'User' }
    },
    { timestamps: true }
);

module.exports = mongoose.model('CompteurIoT', CompteurIoTSchema);
