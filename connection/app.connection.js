let mongoose = require('mongoose');
let nodeModules = require('node-modules');
require('dotenv').config();

let connectionString = process.env.CONNECTION_STRING;

let connection = mongoose.connect(connectionString)
.then(() => {
    console.log("Database is connected sucessfully.");
}).catch((error) => {
    console.log(error.message);
});

module.exports = connection;