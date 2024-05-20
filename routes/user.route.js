const express = require('express');
const router = express.Router();
const {
    addUser,
    updateUser,
    deleteUser,
    getUser,
    getAllUsers
} =require ('../controllers/userManagement/index.js');
const isAuth  = require('../middlewares/isAuth.js');
const isAdmin  = require('../middlewares/isAdmin.js');


//router.post('/add', isAuth,isAdmin,addUser);
router.post('/add', addUser);
router.put('/:id', isAuth, isAdmin, updateUser);

router.delete('/deluser', isAuth, isAdmin, deleteUser);
router.get('/:id', isAuth, getUser);
router.get('/', getAllUsers);



module.exports = router;
