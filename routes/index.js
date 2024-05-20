const express = require('express');
const user = require('./user.route.js');
const authentifier = require('./auth.route.js');
const apparail = require('./app.route.js');
const resetPassword = require('./password.route.js');
const rapport = require('./rapportRoute.js');
const predict = require('./predict.route.js');
// const historique = require('./historique.route.js');
const monitor = require('./moniteur.route.js');
const message = require('./message.route.js');

const router = express.Router();

router.use('/api/user', user);
router.use('/api/auth', authentifier);
router.use('/api/app', apparail);
router.use('/api/reset', resetPassword);
router.use('/api/rapport', rapport);
router.use('/messages', message);
router.use('/predict', predict);  
router.use('/monitor', monitor);
// router.use("/api/historique", historique);

module.exports = router;
