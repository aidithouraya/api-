const mongoose = require('mongoose');
const { Schema } = mongoose;

const TechnicienSchema = new Schema(
    {
        NOM_TECHNICIEN: { type: String, required: true },
        cardID: { type: String, required: true },
        postetime: { type: Number },
        username: { type: String, required: true },
        date_timeIn: { type: Date },
        date_timeOut: { type: Date },
        UserStat: { type: String, required: true },
        presencetime: { type: String },
        workday: { type: Date }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Technicien', TechnicienSchema);
