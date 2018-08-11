var express = require('express');

var auth = require('../auth');
var orders = require('../models/orders');

var customer = express.Router();
var getToken = auth.getToken;
var checkToken = auth.checkToken;
var authCheck = auth.authCheck;

exports = module.exports = customer;

// /[a-z, A-Z]/g pure alphabet url
customer.post(/[a-z,A-Z]/g, checkToken);
customer.post(/[a-z,A-Z]/g, authCheck);

customer.post('/login', function(req, res, next) {
  // get authData(global)
  var authData = {};
  authData['phone'] = req.body.phone;
  authData['auth'] = 'customer';
  req.auth = authData;

  // get token(global)
  getToken(req, res, next);

  // generate resData
  var resData = {};
  resData['success'] = true;
  res.json(resData);
  res.end();
  next();
});

customer.post('/appointment', function(req, res, next) {
  // decode token to get info
  var authData = req.auth;

  // generate database data



  // res
  var resData = {};
  resData['success'] = true;
  res.json(resData);
  res.end();
  next();
});

customer.post('/deleteAppointment', function(req, res, next) {
  var resData = {};
  resData['success'] = true;
  res.json(resData);
  res.end();
  next();
});

customer.post('/logout', function(req, res, next) {
  res.clearCookie('token');
  var resData = {};
  resData['success'] = true;
  res.json(resData);
  res.end();
  next();
});

customer.post('/getCurrentAppointment', function(req, res, next) {
  var resData = {};
  resData['success'] = true;
  res.json(resData);
  res.end();
  next();
});

customer.post('/getAppointments', function(req, res, next) {
  var resData = {};
  resData['success'] = true;
  res.json(resData);
  res.end();
  next();
});
