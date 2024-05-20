const mongoose = require('mongoose');
const { Schema } = mongoose;
const verificationSchema = new Schema({
    email: String,
    code: String,
    expiration: Date
});

module.exports = mongoose.model('Verification', verificationSchema)

