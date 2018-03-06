const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!!!'));
app.use(routes);

module.exports = app;