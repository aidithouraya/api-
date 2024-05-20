const express = require('express');
const {
    verifCode,
    sendCode
}= require('../controllers/userManagement/password.controller.js');

const router = express.Router();

router.post('/request-code',sendCode)
router.post('/verify-code',verifCode)

module.exports =  router;
