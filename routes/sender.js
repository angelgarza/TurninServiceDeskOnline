/*DONE*/
var express = require('express');
var router = express.Router();

var senderDal = require('../model/sender_dal');
/*var restaurantRatingDal = require('../model/restaurantRating_dal');*/


router.get('/all', function(req, res) {
    senderDal.GetAll(function(err, result) {
            if (err) throw err;
            res.render('sender/displayAllSender.ejs', {rs: result});
        }
    );
});

router.get('/', function(req, res) {
    console.log(req.query.sender_id);
    if(req.query.sender_id == null){
        res.redirect('/sender/all')
    }
    else {
        senderDal.GetByID(req.query.sender_id, function (err, result) {
                if (err) {
                    res.send("Error: " + err);
                    return;
                }
                console.log(result);
                res.render('sender/displaySenderInfo.ejs', {rs: result, sender_id: req.query.sender_id});
            }
        );
    }
});

router.get('/new', function(req, res) {
    res.render('sender/insertSenderForm');
});

router.get('/senderInsert', function(req, res){
    senderDal.Insert(req.query.fname, req.query.lname, req.query.email, function(err, result){
        var response = {};
        if(err) {
            response.message = err.message;
        }
        else {
            response.message = 'Success!';
        }
        res.json(response);
    });
});



module.exports = router;