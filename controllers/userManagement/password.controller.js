const User = require('../../models/user/user.model.js')


const Verification = require('../../models/Verification.model.js')
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');



const sendCode = async (req, res) => {
    const { email } = req.body;


    if (!email) {
        return res.status(400).send("email is required")
    }

    try {


        const code = generateVerificationCode();

        await sendVerificationEmail(email, code);
        await storeVerificationCode(email, code);

        res.status(200).send('Verification code send by e-mail');
    } catch (err) {
        res.status(500).send("internal server error")
    }

}




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


// Génération du code de vérification
const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Envoi de l'email de vérification
const sendVerificationEmail = async (email, code) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS,
        }
    });

    let mailOptions = {
        from: process.env.NODEMAILER_USER,
        to: email,
        subject: 'Reset Password',
        text: `Your code of verification is ${code}`
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw new error("Failed to send mail contact your administarator")
    }
}

// Stockage du code de vérification
const storeVerificationCode = async (email, code) => {
    const expiration = new Date(Date.now() + 10 * 60000); // Le code expire dans 10 minutes

    const verification = new Verification({
        email: email,
        code: code,
        expiration: expiration
    });

    await verification.save();
}

module.exports = {
    verifCode,
    sendCode
}
