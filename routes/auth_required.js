/* DONE? */
var express = require('express');
var router = express.Router();

var trackingDal = require('../model/tracking_dal');

router.get('/', function(req, res) {
    trackingDal.GetByID(req.query.tracking_num, function(err, result) {
        res.render('tracking/TrackingForm', {rs: result, recipient_id: req.query.recipient_id, tracking_num: req.session.account.id});
    });
});

router.get('/tracking_number', function(req, res) {
    trackingDal.Insert(req.query.tracking_num, req.query.recipient_id, req.query.fname, req.query.lname, function(err, result){
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