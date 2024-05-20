const mongoose = require('mongoose')

const transfoSchema = new mongoose.Schema({
    idond: String,
    token: String,
    flameData: Number,
    smokeData: Number,
    temperaturetransfo: Number,
    temperatureData: Number,
    humidityData: Number,
    doorData: Number,
    stat_sys: Number
});

// Création du modèle MongoDB à partir du schéma
module.exports = mongoose.model('TransfoData', transfoSchema, 'transfoIot');