const express = require('express');
const { getAppHistory, getAllAppsHistory } = require('../controllers/historique.controller.js');

const router = express.Router();

router.get('/app/:id', getAppHistory);
router.get('/apps/history', getAllAppsHistory);

module.exports = router;
