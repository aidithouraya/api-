import userModel from "../models/user/user.model.js"

const Verification = require('../models/Verification.model.js')
const nodemailer = require('nodemailer');

const bcrypt = require('bcrypt');

//app.post('/request-code',

const sendCode = async (req, res) => {
    const { email } = req.body;

    const code = generateVerificationCode();
    await sendVerificationEmail(email, code);
    await storeVerificationCode(email, code);

    res.send('Verification code send by e-mail');
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



app.post('/verify-code', async (req, res) => {
    const { email, code } = req.body;

    const verification = await Verification.findOne({ email: email, code: code });

    if (!verification) {
        return res.status(400).send('Code de vérification incorrect');
    }

    if (verification.expiration < new Date()) {
        return res.status(400).send('Code de vérification expiré');
    }

    // Code vérifié avec succès, procédez à la réinitialisation du mot de passe
    res.send('Code de vérification validé avec succès');
});






// Génération du code de vérification
const  generateVerificationCode = ()=> {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Envoi de l'email de vérification
const sendVerificationEmail =  async  (email, code)=> {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    let mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Votre code de vérification',
        text: `Votre code de vérification est ${code}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email envoyé avec succès');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
    }
}

// Stockage du code de vérification
const storeVerificationCode = async (email, code)=> {
    const expiration = new Date(Date.now() + 10 * 60000); // Le code expire dans 10 minutes

    const verification = new Verification({
        email: email,
        code: code,
        expiration: expiration
    });

    await verification.save();
}

module.exports = {verifCode,sendCode};







