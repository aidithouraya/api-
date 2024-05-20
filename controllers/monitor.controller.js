const DataModel = require('../models/data.model.js');
const TransfoModel = require('../models/TransfoData.model.js');
const ClimatiseurModel = require('../models/climatiseurData.model.js');

const getAllData = async (req, res) => {
    const data = await DataModel.find().sort({ _id: -1 }).limit(5);
    res.send(data);
};

const addGroupe = async (req, res) => {
    try {
        const newData = new DataModel({
            idgrp: req.query.idgrp,
            token: req.query.token,
            flameData: req.query.flameData,
            smokeData: req.query.smokeData,
            temperatureData: req.query.temperatureData,
            humidityData: req.query.humidityData,
            doorData: req.query.doorData,
            fuelLevel: req.query.fuelLevel,
            engineTemperature: req.query.engineTemperature,
            chargerState: req.query.chargerState,
            batteryVoltage: req.query.batteryVoltage,
            generatorState: req.query.generatorState,
            phaseVoltage: req.query.phaseVoltage,
            phaseCurrent: req.query.phaseCurrent,
            frequency: req.query.frequency,
            coolantTemperature: req.query.coolantTemperature,
            coolantLevel: req.query.coolantLevel,
            coolantViscosity: req.query.coolantViscosity,
            operationTime: req.query.operationTime,
            lastStartTime: req.query.lastStartTime,
            latitude: req.query.latitude,
            longitude: req.query.longitude,
            state_sys: req.query.state_sys
        });

        await newData.save();

        res.send('Données enregistrées avec succès dans la collection "infoIot" de MongoDB');
    } catch (error) {
        console.error("Erreur lors de l'enregistrement des données dans MongoDB :", error);
        res.status(500).send("Erreur lors de l'enregistrement des données dans MongoDB");
    }
};

const addTransfo = async (req, res) => {
    try {
        const newTransfoData = new TransfoModel({
            idond: req.query.idond,
            token: req.query.token,
            flameData: req.query.flameData,
            smokeData: req.query.smokeData,
            temperaturetransfo: req.query.temperaturetransfo,
            temperatureData: req.query.temperatureData,
            humidityData: req.query.humidityData,
            doorData: req.query.doorData,
            stat_sys: req.query.stat_sys
        });

        await newTransfoData.save();

        res.send(
            'Données des transformateurs enregistrées avec succès dans la collection "transfoIot" de MongoDB'
        );
    } catch (error) {
        console.error(
            "Erreur lors de l'enregistrement des données des transformateurs dans MongoDB :",
            error
        );
        res.status(500).send(
            "Erreur lors de l'enregistrement des données des transformateurs dans MongoDB"
        );
    }
};

const addClimatiseur = async (req, res) => {
    try {
        const newClimatiseurData = new ClimatiseurModel({
            idond: req.query.idond,
            token: req.query.token,
            flameData: req.query.flameData,
            smokeData: req.query.smokeData,
            doorData: req.query.doorData,
            state_sys: req.query.state_sys,
            Va: req.query.Va,
            Vb: req.query.Vb,
            Vc: req.query.Vc,
            Vab: req.query.Vab,
            Vbc: req.query.Vbc,
            Vca: req.query.Vca,
            Ia: req.query.Ia,
            Ib: req.query.Ib,
            Ic: req.query.Ic,
            In: req.query.In,
            Wa: req.query.Wa,
            Wb: req.query.Wb,
            Wc: req.query.Wc,
            Wt: req.query.Wt,
            Qa: req.query.Qa,
            Qb: req.query.Qb,
            Qc: req.query.Qc,
            Qt: req.query.Qt,
            Sa: req.query.Sa,
            Sb: req.query.Sb,
            Sc: req.query.Sc,
            St: req.query.St,
            Pfa: req.query.Pfa,
            Pfb: req.query.Pfb,
            Pfc: req.query.Pfc,
            Pft: req.query.Pft,
            F: req.query.F,
            kWht: req.query.kWht,
            KVARHt: req.query.KVARHt,
            KWHF: req.query.KWHF,
            KWHB: req.query.KWHB,
            KVARHF: req.query.KVARHF,
            KVARHB: req.query.KVARHB,
            Last_demand: req.query.Last_demand,
            Present_demand: req.query.Present_demand,
            Peak_demand: req.query.Peak_demand,
            temperature: req.query.temperature,
            humidity: req.query.humidity
        });

        await newClimatiseurData.save();

        res.send(
            'Données des climatiseurs enregistrées avec succès dans la collection "climatiseurIot" de MongoDB'
        );
    } catch (error) {
        console.error(
            "Erreur lors de l'enregistrement des données des climatiseurs dans MongoDB :",
            error
        );
        res.status(500).send(
            "Erreur lors de l'enregistrement des données des climatiseurs dans MongoDB"
        );
    }
};

module.exports = {
    getAllData,
    addGroupe,
    addTransfo,
    addClimatiseur  // Corrected here
};
