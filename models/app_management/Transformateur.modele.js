const mongoose = require('mongoose');

// Définition du schéma du transformateur
const transformateurSchema = new mongoose.Schema({
    marque: {
        type: String
    },
    modele: {
        type: String
    },
    puissance: {
        type: Number,
        required: true
    },
    tensionEntrée: {
        type: Number,
        required: true
    },
    tensionSortie: {
        type: Number,
        required: true
    },
    courantSortie: {
        type: Number,
        required: true
    },
    poids: {
        type: Number,
        required: true
    },
    dateFabrication: {
        type: Date,
        default: Date.now
    },

    user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});


module.exports = mongoose.model('Transformateur', transformateurSchema);
