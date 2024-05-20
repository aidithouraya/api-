const Report = require('../../models/user/rapport.js');

const addRapport = async (req, res) => {
    try {
        const { deviceName, deviceId, userId, rapport } = req.body;
        console.log('🚀 ~ addRapport ~ req.body:', req.body);
        // Validate input data
        if (!deviceName || !deviceId || !userId || !rapport) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Create a new report document
        const newReport = new Report({
            deviceName,
            deviceId,
            userId,
            rapport
        });

        // Save the report to the database
        await newReport.save();

        return res.status(201).json({ message: 'Report saved successfully.', report: newReport });
    } catch (error) {
        console.log('🚀 ~ addRapport ~ error:', error);
        return res.status(500).json({ message: error.message });
    }
};

const updateRapport = async (req, res) => {};
const deleteRapport = async (req, res) => {};
const getRapport = async (req, res) => {
    try {
        let id = req.params.id;
        const rapport = await Report.findById(id);
        return res.status(200).json(rapport);
    } catch (error) {
        console.log('🚀 ~ getRapport ~ error:', error);
        return res.status(500).json({ message: error.message });
    }
};

const getAllRapports = async (req, res) => {
    try {
        const rapports = await Report.find();
        console.log('🚀 ~ getAllRapports ~ rapports:', rapports);

        return res.status(200).json({ msg: 'success', rapports });
    } catch (error) {
        console.error(`Error geting device: ${error.message}`);
        return res.status(error?.statusCode || 500).json({ msg: error.message });
    }
};

const getUserDevices = async (req, res) => {};

module.exports = { addRapport, updateRapport, deleteRapport, getRapport, getAllRapports, getUserDevices };
