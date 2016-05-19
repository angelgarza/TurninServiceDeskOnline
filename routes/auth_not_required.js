/*DONE*/
var express = require('express');
var router = express.Router();

/* GET recipients listing. */
router.get('/', function(req, res, next) {
    res.send('authorization not required.')
});

module.exports = router;