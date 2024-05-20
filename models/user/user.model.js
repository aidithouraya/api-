const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, required: true },
        email: { type: String, required: true },
        etat: { type: Number, required: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
