const mongoose = require('mongoose');
const { Schema } = mongoose;
const verificationSchema = new Schema({
    email: String,
    code: String,
    expiration: Date
},
{ timestamps: true }
);

export default mongoose.model('Verification', verificationSchema)

