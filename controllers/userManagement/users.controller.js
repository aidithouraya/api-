const { User } = require('../../models/user/index.js');
const bcrypt = require('bcrypt');

const addUser = async (req, res) => {
    try {
        // Validate required fields
        const { username, password, role, email, etat } = req.body;
        if (!username || !password || !role || !email || !etat) {
            throw new Error('All fields are required');
        }

        // Check if user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error('User with this email already exists');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        // Create new user with hashed password
        const newUser = await User.create({
            username,
            password: hashedPassword,
            role,
            email,
            etat
        });

        // Send response
        res.status(200).json({ msg: 'new user was created ', data: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller function to handle user update
const updateUser = async (req, res) => {
    console.log('entered update user');
    try {
        // Extract user ID from request parameters or body
        const userId = req.params.id;
        // Retrieve updated user data from request body
        let userData = req.body;
        const user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(401).json({ message: 'User not found !! ' });
        }
        // Validate password
        if (userData.password != undefined && userData.password) {
            const isPasswordValid = await bcrypt.compare(userData.password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Password Incorrect' });
            } else {
                userData.password = await bcrypt.hash(userData.password, 10);
                //Update user data
                const updatedUser = await User.findByIdAndUpdate(userId, userData, {
                    new: true
                });
            }
        } else {
            console.log('No password!');

            const updatedUser = await User.findByIdAndUpdate(userId, userData, {
                new: true
            });
        }

        return res.status(200).json({ message: 'Update Successfully ' });
    } catch (error) {
        return res.status(500).json({ message: `Error updating user` });
    }
};

const deleteUser = async (userId) => {
    try {
        // Check if user exists
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }

        // Delete user
        await user.remove();

        return user;
    } catch (error) {
        throw new Error(`Error deleting user: ${error.message}`);
    }
};

const getUser = async (req, res) => {
    const userId = req.params.id;
    try {
        // Find user by ID
        const user = await User.findById(userId);
        if (!user) {
            console.log('no user found');
        }

        return res.status(200).json({ user });
    } catch (error) {
        console.log('no user found', error);
    }
};

const getAllUsers = async (req, res) => {
    try {
        // Find all users
        const users = await User.find();
        return res.status(200).json({ users });
    } catch (error) {
        throw new Error(`Error getting all users: ${error.message}`);
    }
};

module.exports = { addUser, updateUser, deleteUser, getUser, getAllUsers };
