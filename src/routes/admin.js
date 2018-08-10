var express = require('express');

var auth = require('../auth');

var admin = express.Router();
var getToken = auth.getToken;
var checkToken = auth.checkToken;
var authCheck = auth.authCheck;

exports = module.exports = admin;

admin.post(/[a-z,A-Z]/g, checkToken);
admin.post(/[a-z,A-Z]/g, authCheck);

admin.post('/login', function (req, res, next) {
  var authData = {};
  authData['username'] = req.body.username;
  authData['password'] = req.body.password;
  authData['auth'] = 'admin';
  req.auth = authData;

  getToken(req, res, next);

  var resData = {};
  resData['success'] = true;
  res.json(resData);
  res.end();
  next();
});

admin.post('/logout', function (req, res, next) {
    var resData = {};
    resData['success'] = true;
    res.json(resData);
    res.end();
    next();
});

admin.post('/modifyPassword', function (req, res, next) {
    var resData = {};
    resData['success'] = true;
    res.json(resData);
    res.end();
    next();
});

admin.post('/listAppointments', function (req, res, next) {
    var resData = {};
    resData['success'] = true;
    res.json(resData);
    res.end();
    next();
});

admin.post('/acceptAppointment', function (req, res, next) {
    var resData = {};
    resData['success'] = true;
    res.json(resData);
    res.end();
    next();
});

admin.post('/reply', function (req, res, next) {
    var resData = {};
    resData['success'] = true;
    res.json(resData);
    res.end();
    next();
});

admin.post('/createMember', function (req, res, next) {
    var resData = {};
    resData['success'] = true;
    res.json(resData);
    res.end();
    next();
});

admin.post('/listAllMembers', function (req, res, next) {
    var resData = {};
    resData['success'] = true;
    res.json(resData);
    res.end();
    next();
});

admin.post('/modifyMemberPassword', function (req, res, next) {
    var resData = {};
    resData['success'] = true;
    res.json(resData);
    res.end();
    next();
});
