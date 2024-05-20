const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();
mongoose.set('strictQuery', true);
//connect
const connect = () => {
    try {
        mongoose.connect(process.env.MONGO).then(console.log('database connected !!!'));
    } catch (error) {
        console.log('connection failed',error);
    }
};

module.exports =  connect;
