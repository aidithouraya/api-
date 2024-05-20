const express = require('express');
const router = express.Router();
const {
    getPredict
    
} =require('../controllers/predict.controller');

router.get('/', getPredict);

module.exports = router