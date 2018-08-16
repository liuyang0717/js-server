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

  // generate reqData
  var reqData = req.body;

  // generate database data
  var target = {
    phone: authData.phone,
    name: reqData.name,
    email: reqData.email,
    location: reqData.campus,
    model: reqData.deviceVersion,
    os: reqData.systemVersion,
    desc: reqData.description
  };


  // generate resData
  var resData = {};

  // operate database
  orders.create(target, function(error, result) {
    if (error) {
      next(error);
    } else {
      resData['success'] = true;
      res.json(resData);
      res.end();
      next();
    }
  });
});

customer.post('/deleteAppointment', function(req, res, next) {
  // generate authData
  var authData = req.auth;

  // generate target
  var target = {
    phone: authData.phone
  };

  // generate resData
  var resData = {};

  // operate database
  orders.destroy(target, function(error, result) {
    if (error) {
      next(error);
    } else {
      // generate baseData
      var baseData = JSON.parse(JSON.stringify(result));

      res.json(baseData);
      res.end();
      next();
    }
  });
});

customer.post('/logout', function(req, res, next) {
  // clear cookie
  res.clearCookie('token');

  // generate resData
  var resData = {};

  resData['success'] = true;
  res.json(resData);
  res.end();
  next();
});

customer.post('/getCurrentAppointment', function(req, res, next) {
  // generate authData
  var authData = req.auth;

  // generate target
  var target = {
    phone: authData.phone
  };

  // generate resData
  var resData = {};

  // operate database
  orders.findOne(target, function(error, result) {
    if (error) {
      next(error);
    } else {
      // generate baseData
      var baseData = JSON.parse(JSON.stringify(result));

      res.json(baseData);
      res.end();
      next();
    }
  });
});

customer.post('/getAppointments', function(req, res, next) {
  // generate authData
  var authData = req.auth;

  // generate target
  var target = {
    phone: authData.phone
  };

  // generate resData
  var resData = {};

  // operate database
  orders.findAll(target, function(error, result) {
    if (error) {
      next(error);
    } else {
      // generate baseData
      var baseData = JSON.parse(JSON.stringify(result));

      res.json(baseData);
      res.end();
      next();
    }
  });
});
