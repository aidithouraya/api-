const express = require('express');
const {
    getAllData,
    addGroupe,
    addTransfo,
    addClimatiseur  
}= require('../controllers/monitor.controller.js');
const router = express.Router();

router.get('/get', getAllData);
router.get('/addgroupe', addGroupe);
router.get('/addtransfo', addTransfo);
router.get('/addclimatiseur', addClimatiseur);  

module.exports =  router;
