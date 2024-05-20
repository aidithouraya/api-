const mongoose = require('mongoose')


const climatiseurSchema = new mongoose.Schema({
    //shema f mongo de données
    idond: String,
    token: String,
    flameData: Number,
    smokeData: Number,
    doorData: Number,
    state_sys: Number,
    Va: Number,
    Vb: Number,
    Vc: Number,
    Vab: Number,
    Vbc: Number,
    Vca: Number,
    Ia: Number,
    Ib: Number,
    Ic: Number,
    In: Number,
    Wa: Number,
    Wb: Number,
    Wc: Number,
    Wt: Number,
    Qa: Number,
    Qb: Number,
    Qc: Number,
    Qt: Number,
    Sa: Number,
    Sb: Number,
    Sc: Number,
    St: Number,
    Pfa: Number,
    Pfb: Number,
    Pfc: Number,
    Pft: Number,
    F: Number,
    kWht: Number,
    KVARHt: Number,
    KWHF: Number,
    KWHB: Number,
    KVARHF: Number,
    KVARHB: Number,
    Last_demand: Number,
    Present_demand: Number,
    Peak_demand: Number,
    temperature: Number,
    humidity: Number
});

// Création du modèle MongoDB à partir du schéma
module.exports = mongoose.model('ClimatiseurData', climatiseurSchema, 'climatiseurIot');