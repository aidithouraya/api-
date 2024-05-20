const userModel = require("../models/user/user.model.js");
const bcrypt = require("bcryptjs");

// Endpoint to reset the password
const newpass = async (req, res) => {
    const { email, newPassword } = req.body;
    try {
        // Check if user exists with the provided email
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(403).json({ message: "User not found" });
        }

        // Hash the new password for security
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update the user's password
        user.password = hashedPassword;
        await user.save();

        // Send a response indicating the password update was successful
        res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        // Handle any errors that occur during the password update process
        console.error("Error updating password:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = newpass;
