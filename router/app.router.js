let express = require('express');
let router = express.Router();
let dataPost = require('../controller/app.controller');

router.post('/', dataPost);

module.exports = router;