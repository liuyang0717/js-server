var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

var checkToken = expressJwt({
  secret: 'hello',
  requestProperty: 'auth',
  getToken: function(req) {
    return req.cookies.token;
  }
}).unless({
  path: [
    '/customer/login',
    '/admin/login'
  ]
});

var authCheck = function authCheck(req, res, next) {
  var authData = req.auth;
  console.log(authData);
  next()
}

var getToken = function getToken(req, res, next) {
  var data = req.auth;
  var token = jwt.sign(data, 'hello', {
    expiresIn: '10min'
  });
  res.cookie('token', token, {
    domain: '127.0.0.1',
    path: '/',
    maxAge: 60 * 1000 * 10    // 10 minutes
  });
  next();
};

exports.checkToken = module.exports.checkToken = checkToken;
exports.authCheck = module.exports.authCheck = authCheck;
exports.getToken = module.exports.getToken = getToken;
