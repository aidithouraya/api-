import express from 'express';
import {
    addRapport,
    updateRapport,
    deleteRapport,
    getRapport,
    getAllRapports,
    getUserDevices
} from '../controllers/userManagement/rapports.controller.js';
const router = express.Router();

router.post('/add', addRapport);
router.put('/update', updateRapport);
// router.delete('/user/:id', deleteRapport);
// router.get('/user/:userId', getUserDevices);
router.get('/', getAllRapports);
router.get('/:id', getRapport);

export default router;
