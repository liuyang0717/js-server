var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

var checkToken = expressJwt({
    secret: 'hello',
    getToken: function (req) {
        return req.cookies.token;
    }
}).unless({
    path: [
        '/customer/login',
        '/admin/login'
    ]
});

var getToken = function getToken(req, res, next) {
    var data = req.body;
    var token = jwt.sign(data, 'hello');
    res.cookie('token', token, {
        domain: '127.0.0.1',
        path: '/',
        maxAge: 60*1000*10
    });
    next();
};

var decodeToken = function decodeToken(token) {
    var tokenData = jwt.verify(token, 'hello');
    return tokenData;
}

exports.checkToken = module.exports.checkToken = checkToken;
exports.getToken = module.exports.getToken = getToken;
exports.decodeToken = module.exports.decodeToken = decodeToken;
