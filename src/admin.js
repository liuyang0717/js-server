var express = require('express');

var admin = express.Router();

exports = module.exports = admin;

admin.post('/login', function (req, res, next) {
    var data = {};
    data.req = req.body;
    var dataRes = {};
    dataRes['success'] = true;
    dataRes['token'] = "123";
    data.res = dataRes;
    res.json(data);
    res.end();
    next();
});

admin.post('/logout', function (req, res, next) {
    var data = {};
    data.req = req.body;
    var dataRes = {};
    dataRes['success'] = true;
    data.res = dataRes;
    res.json(data);
    res.end();
    next();
});

admin.post('/modifyPassword', function (req, res, next) {
    var data = {};
    data.req = req.body;
    var dataRes = {};
    dataRes['success'] = true;
    data.res = dataRes;
    res.json(data);
    res.end();
    next();
});

admin.post('/listAppointments', function (req, res, next) {
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

admin.post('/acceptAppointment', function (req, res, next) {
    var data = {};
    data.req = req.body;
    var dataRes = {};
    dataRes['success'] = true;
    data.res = dataRes;
    res.json(data);
    res.end();
    next();
});

admin.post('/reply', function (req, res, next) {
    var data = {};
    data.req = req.body;
    var dataRes = {};
    dataRes['success'] = true;
    data.res = dataRes;
    res.json(data);
    res.end();
    next();
});

admin.post('/createMember', function (req, res, next) {
    var data = {};
    data.req = req.body;
    var dataRes = {};
    dataRes['success'] = true;
    data.res = dataRes;
    res.json(data);
    res.end();
    next();
});

admin.post('/listAllMembers', function (req, res, next) {
    var data = {};
    data.req = req.body;
    var dataRes = {};
    dataRes['success'] = true;
    data.res = dataRes;
    res.json(data);
    res.end();
    next();
});

admin.post('/modifyMemberPassword', function (req, res, next) {
    var data = {};
    data.req = req.body;
    var dataRes = {};
    dataRes['success'] = true;
    data.res = dataRes;
    res.json(data);
    res.end();
    next();
});
