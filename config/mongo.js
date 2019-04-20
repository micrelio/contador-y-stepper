const mongoose = require('mongoose');
// const winston = require('./winston.js')

mongoose.connect('mongodb://localhost:27017/demo-register')
    .then(() => console.log('conectado con mongodb demo-register'))
    .catch(err => console.error('no se puede conectar a mongo', err))


module.exports = mongoose;