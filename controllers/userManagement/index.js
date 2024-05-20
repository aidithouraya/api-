const { 
    login,
    logout
} = require('./auth.controller.js');
const {
    addUser,
    updateUser,
    deleteUser,
    getUser,
    getAllUsers
} = require('./users.controller.js');

module.exports = {
    login,
    logout,
    addUser,
    updateUser,
    deleteUser,
    getUser,
    getAllUsers
};
