var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

var checkToken = expressJwt({
    secret: 'hello',
    getToken: function (req) {
        return req.cookies.token;
    }
}).unless({
    path: ['/customer/login']
});

var getToken = function getToken(req, res, next) {
    var token = jwt.sign({ foo: 'bar' }, 'hello');
    res.cookie('token', token, {
        domain: '127.0.0.1',
        path: '/',
        maxAge: 60*1000*10
    });
    next();
};

exports.checkToken = module.exports.checkToken = checkToken;
exports.getToken = module.exports.getToken = getToken;
