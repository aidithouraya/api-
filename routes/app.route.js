const express = require('express');
const {
    addApp,
    updateApp,
    deleteApp,
    getApp,
    getAllApps,
    getUserDevices
} = require('../controllers/deviceManagement/apps.controller.js');

const router = express.Router();

router.get('/', getAllApps);
router.post('/add', addApp);
router.put('/update', updateApp);
router.delete('/user/:id', deleteApp);
router.get('/user/:userId', getUserDevices);
router.get('/:id', getApp);

module.exports = router;
