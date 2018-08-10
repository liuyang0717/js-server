var express = require('express');

var auth = require('../auth');

var customer = express.Router();
var getToken = auth.getToken;
var checkToken = auth.checkToken;
var authCheck = auth.authCheck;

exports = module.exports = customer;

customer.post(/[a-z,A-Z]/g, checkToken);
customer.post(/[a-z,A-Z]/g, authCheck);

customer.post('/login', function(req, res, next) {
  var authData = {};
  authData['phone'] = req.body.phone;
  authData['auth'] = 'customer';
  req.auth = authData;

  getToken(req, res, next);

  var resData = {};
  resData['success'] = true;
  res.json(resData);
  res.end();
  next();
});

customer.post('/login', getToken);

customer.post('/appointment', function(req, res, next) {
  // decode token to get info
  var tokenData = req.auth;

  // generate database data

  var resData = {};
  resData['success'] = true;
  res.json(resData);
  res.end();
  next();
});
``

customer.post('/deleteAppointment', function(req, res, next) {
  var resData = {};
  resData['success'] = true;
  res.json(resData);
  res.end();
  next();
});

customer.post('/logout', function(req, res, next) {
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
