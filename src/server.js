const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect('mongodb://joao:123@ds257858.mlab.com:57858/production', (err) => {
    console.log('banco on');
})

const port = process.env.port || 3000;
app.listen(port, () => console.log('app is running on port: ', port));

