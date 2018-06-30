const express = require('express');
const router = express.Router();
const config = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nakkamarra', urls: config.social_urls } );
});

module.exports = router;
