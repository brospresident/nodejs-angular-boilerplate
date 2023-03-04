const mongoose = require('mongoose');
const { logger } = require('nlogger').logger(module);

const con = mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@proiect-am.e69a7en.mongodb.net/?retryWrites=true&w=majority`)

module.exports = con;

