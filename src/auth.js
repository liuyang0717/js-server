var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

var checkToken = expressJwt({
    secret: 'hello',
    getToken: function (req) {
        return req.body.token;
    }
}).unless({
    path: ['/customer/login']
});

var getToken = function getToken(req, res, next) {
    var token = jwt.sign({ foo: 'bar' }, 'hello');
    req.body.token = token;
    console.log(req.cookies);
    res.cookie('token', token);
    next();
};

exports.checkToken = module.exports.checkToken = checkToken;
exports.getToken = module.exports.getToken = getToken;
