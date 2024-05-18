import express from 'express';

import user from './user.route.js';
import authentifier from './auth.route.js';
import apparail from './app.route.js';
import reset from './passreset.route.js';
import rapport from './rapportRoute.js';
import verify from './verify.js'
import { newpass } from '../controllers/newpass.js'
// import historique from './historique.route.js'

const router = express.Router();

router.use('/api/user', user);
router.use('/api/auth', authentifier);
router.use('/api/app', apparail);
router.use('/api/reset', reset);
router.use('/api/rapport', rapport);
router.use('/api/verify', verify)
router.post('/api/newPassword', newpass)
// router.use("/api/historique", historique);

export default router;
