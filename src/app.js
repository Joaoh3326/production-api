const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/user');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept-Enconding'],
    preflightContinue: false,
    optionsSuccessStatus: 204
}));
app.use(compression());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!!!'));
app.use(routes);

module.exports = app;