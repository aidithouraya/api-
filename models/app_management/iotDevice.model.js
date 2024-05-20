const mongoose = require('mongoose');
const { Schema } = mongoose;

const IoTDeviceSchema = new Schema(
    {
        idslave: { type: String, required: true },
        device_name: { type: String, required: true },
        manufacturer: { type: String },
        location: { type: String },
        description: { type: String },
        typeDevice: { type: String },
        relationDevice: { type: String },
        is_connected: { type: Boolean, default: false },
        user: { type: Schema.ObjectId, ref: 'User' }
    },
    { timestamps: true }
);

module.exports =  mongoose.model('IoTDevice', IoTDeviceSchema);
