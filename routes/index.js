const express = require('express');
const router = express.Router();
const config = require('../config');

/* GET home page. */
router.get('/', function (req, res, next) {

    let templateVariables = {
        title: 'Nakkamarra',
        urls: config.social_urls
    };

    res.render('index', templateVariables);
});

module.exports = router;
