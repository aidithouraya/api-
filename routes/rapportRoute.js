const express = require('express');
const router = express.Router();
const {
    addRapport,
    updateRapport,
    deleteRapport,
    getRapport,
    getAllRapports,
    getUserDevices
} = require('../controllers/userManagement/rapports.controller.js');


router.post('/add', addRapport);
router.put('/update', updateRapport);
// router.delete('/user/:id', deleteRapport);
// router.get('/user/:userId', getUserDevices);
router.get('/', getAllRapports);
router.get('/:id', getRapport);

module.exports = router
