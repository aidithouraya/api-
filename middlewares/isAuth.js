const jwt = require ('jsonwebtoken')
const dotenv  = require('dotenv')

dotenv.config();

const isAuth = (req, res, next) => {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
        return res.status(401).json({ error: 'Unauthorized: No access token provided' });
    }

    try {
        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ error: 'Unauthorized: Invalid access token ' });
    }
};

module.exports =  isAuth;
