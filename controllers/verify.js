import userModel from "../models/user/user.model.js"

const Verification = require('../models/Verification.model.js')

const bcrypt = require('bcrypt');

export const verify = async (req, res) => {
    try { 
        const { email } = req.body;
        console.log('haw l user', email)
        const theuser = await userModel.findOne({email: email});
        if (!theuser) {
            return res.status(404).json({message: "user not found"});
        }
        res.status(200).json({message: "user found"});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }
}

//app.post('/request-code',

const sendCode = async (req, res) => {
    const { email } = req.body;

    const code = generateVerificationCode();
    await sendVerificationEmail(email, code);
    await storeVerificationCode(email, code);

    res.send('Code de vérification envoyé');
}

//app.post('/verify-code',






const verifCode = async (req, res) => {
    const { email, code, newPassword } = req.body;

    try {
        // Chercher le code de vérification
        const verification = await Verification.findOne({ email: email, code: code });

        if (!verification) {
            return res.status(400).send('Verification code is not correct');
        }

        if (verification.expiration < new Date()) {
            return res.status(400).send('Verification code has been expired');
        }

        // Hachage du nouveau mot de passe
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Mise à jour du mot de passe de l'utilisateur
        const updatedUser = await User.findOneAndUpdate(
            { email: email },
            { password: hashedPassword },
            { new: true } // pour retourner le document mis à jour
        );

        if (!updatedUser) {
            return res.status(404).send('User with this email does not exist');
        }

        // Suppression du code de vérification après utilisation
        await Verification.deleteOne({ email: email, code: code });

        // Réponse
        res.status(200).json('Password has been updated successfully!');
    } catch (error) {
        console.error('Error during verification or password update:', error);
        res.status(500).send('An error occurred during the process');
    }
};

module.exports = verifCode;







