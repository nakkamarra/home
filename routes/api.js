var express = require('express');
var router = express.Router();

/* GET Request */
router.get('/', function(req, res, next) {
    res.json({
      title: "Default JSON API",
      description: {
	    local: "Testing",
	    extended: "Testing"
      },
      lookupValues: ["123", "456", "789"]
    });
});

/* POST Request */
//TODO: WRITE SOME POST REQUEST CODE

module.exports = router;
