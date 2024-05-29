let express = require('express');
let app = express();
let connection = require('../connection/app.connection');
let router = require('../router/app.router');
require('dotenv').config();
let port = process.env.PORT || 4000

app.use(express.urlencoded({
    extended: true,
}));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader('Access-Control-Allow-Method', 'POST');
    res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
    next();
});

app.use('/api', router);

app.listen(port, () => {
    console.log(`server is started at the port ${process.env.PORT || 4000}`)
});