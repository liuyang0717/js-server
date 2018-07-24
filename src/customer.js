var express = require('express');

var auth = require('./auth');

var customer = express.Router();
var getToken = auth.getToken;
var checkToken = auth.checkToken;

exports = module.exports = customer;

customer.post('/login', getToken);
customer.post(checkToken);

customer.post('/login', function (req, res, next) {
    var data = {};
    data.req = req.body;
    var dataRes = {};
    dataRes['success'] = true;
    dataRes['token'] = '123';
    data.res = dataRes;
    res.json(data);
    res.end();
    next();
});

customer.post('/appointment', function (req, res, next) {
    var data = {};
    data.req = req.body;
    var dataRes = {};
    dataRes['success'] = true;
    data.res = dataRes;
    res.json(data);
    res.end();
    next();
});

customer.post('/deleteAppointment', function (req, res, next) {
    var data = {};
    data.req = req.body;
    var dataRes = {};
    dataRes['success'] = true;
    data.res = dataRes;
    res.json(data);
    res.end();
    next();
});

customer.post('/logout', function (req, res, next) {
    var data = {};
    data.req = req.body;
    var dataRes = {};
    dataRes['success'] = true;
    data.res = dataRes;
    res.json(data);
    res.end();
    next();
});

customer.post('/getCurrentAppointment', function (req, res, next) {
    var data = {};
    data.req = req.body;
    var dataRes = {};
    dataRes['success'] = true;
    data.res = dataRes;
    res.json(data);
    res.end();
    next();
});

customer.post('/getAppointments', function (req, res, next) {
    var data = {};
    data.req = req.body;
    var dataRes = {};
    dataRes['success'] = true;
    dataRes['appointments'] = [];
    data.res = dataRes;
    res.json(data);
    res.end();
    next();
});
