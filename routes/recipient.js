/*DONE*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
var recipientDal = require('../model/recipient_dal');

router.get('/all', function(req, res) {
  recipientDal.GetAll(function(err, result) {
        if (err) throw err;
        res.render('recipient/displayAllRecipient.ejs', {rs: result});
      }
  );
});

router.get('/', function(req, res) {
  console.log(req.query.recipient_id);
  if(req.query.recipient_id == null){
    res.redirect('/recipient/all')
  }
  else {
    recipientDal.GetByID(req.query.recipient_id, function (err, result) {
          if (err) {
            res.send("Error: " + err);
            return;
          }
          console.log(result);
          res.render('recipient/displayRecipientInfo.ejs', {rs: result, recipient_id: req.query.recipient_id});
        }
    );
  }
});
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});



  //res.render('authentication/signup.ejs');
//});

router.get('/recipient_insert', function(req, res){
  recipientDal.Insert(req.query.fname, req.query.lname, req.query.email, req.query.password, function(err, result){
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