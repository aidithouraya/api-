const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser'); // Importation de body-parser
const morgan = require('morgan');
const connect = require('./config/db.js');
const routes = require('./routes/index.js');
const Engine = require('./middlewares/apareilingine.js');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(morgan('dev'));

app.use(express.json());
app.use(cookieParser());
dotenv.config();

// Configuration de CORS
app.use(
    cors({
        credentials: true,
        origin: true
    })
);

// Middleware pour parser les données POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

const port = process.env.PORT || 4000;
server.listen(port, () => {
    connect();
    console.log(`Server started on port ${port}`);
});

var engine = new Engine({ agents: 24 }, io);
engine.init();
engine.run();
io.on('connection', (socket) => {
    console.log('connected to socket.io');

    socket.on('setup', (userData) => {
        console.log('ok');
        socket.join(userData._id);
        socket.emit('connected');
    });
});
