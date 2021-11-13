const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

module.exports = mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => 
        console.log('You are now connected to Mongo!')
    )
    .catch(err => console.error('Something went wrong', err))
