import express from 'express';
import {
    addUser,
    updateUser,
    deleteUser,
    getUser,
    getAllUsers
} from '../controllers/userManagement/index.js';


import isAuth from '../middlewares/isAuth.js';
import isAdmin from '../middlewares/isAdmin.js';

const router = express.Router();

router.post('/add', isAuth,isAdmin,addUser);
router.put('/:id', isAuth, isAdmin, updateUser);

router.delete('/deluser', isAuth, isAdmin, deleteUser);
router.get('/:id', isAuth, getUser);
router.get('/', getAllUsers);



export default router;
