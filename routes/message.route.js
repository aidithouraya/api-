const express  = require ('express');
const {
    sendMessage
} =  require('../controllers/message.controller.js');
const router = express.Router();

router.post('/',sendMessage);

module.exports = router;