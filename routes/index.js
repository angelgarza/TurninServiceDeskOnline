/*DONE*/
var express = require('express');
var router = express.Router();
var accountDAL = require('../model/account_dal');

router.get('/', function(req, res, next) {
  var data = {
    title : 'Service Desk Online'
  }
  if(req.session.account === undefined) {
    res.render('index', data);
  }
  else {
    data.fname = req.session.account.fname;
    res.render('index', data);
  }
});

router.get('/about', function(req, res) {
  res.render('about.ejs');
});

router.get('/authenticate', function(req, res) {
  accountDAL.GetByEmail(req.query.email, req.query.password, function (err, account) {
    var response = {};
    if (err) {
      response.message = err.message;
    }
    else if (account == null) {
      response.message = 'Login failed, account cannot be found.';
    }
    else {
      req.session.account = account;
      if(req.session.originalUrl = '/login') {
        req.session.originalUrl = '/'; //don't send recipient back to login, instead forward to homepage.
      }
    }
    res.json(response);
  });
});

router.get('/login', function(req, res, next) {
  if(req.session.account) {
    res.redirect('/'); //user already logged in so send them to the homepage.
  }
  else {
    res.render('authentication/login.ejs');
  }
});

router.get('/logout', function(req, res) {
  req.session.destroy( function(err) {
    res.render('authentication/logout.ejs');
  });
});



module.exports = router;