var express = require('express');

var auth = require('../auth');

var customer = express.Router();
var getToken = auth.getToken;
var checkToken = auth.checkToken;
var decodeToken = auth.decodeToken;

exports = module.exports = customer;

customer.post('/login', getToken);
customer.post(checkToken);

customer.post('/login', function (req, res, next) {
    var resData = {};
    resData['success'] = true;
    res.json(resData);
    res.end();
    next();
});

customer.post('/appointment', function (req, res, next) {
    // decode token to get info
    var token = req.cookies.token;
    var tokenData = decodeToken(token);

    // generate database data
    delete tokenData.iat;

    var resData = {};
    resData['success'] = true;
    res.json(resData);
    res.end();
    next();
});``

customer.post('/deleteAppointment', function (req, res, next) {
    var resData = {};
    resData['success'] = true;
    res.json(resData);
    res.end();
    next();
});

customer.post('/logout', function (req, res, next) {
    var resData = {};
    resData['success'] = true;
    res.json(resData);
    res.end();
    next();
});

customer.post('/getCurrentAppointment', function (req, res, next) {
    var resData = {};
    resData['success'] = true;
    res.json(resData);
    res.end();
    next();
});

customer.post('/getAppointments', function (req, res, next) {
    var resData = {};
    resData['success'] = true;
    res.json(resData);
    res.end();
    next();
});
