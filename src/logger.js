var morgan = require('morgan');
var fs = require('fs');

morgan.token('paras', function(req, res, next) {
  var paras = JSON.stringify(req.body);
  return paras || '-';
  next();
});

morgan.format('itxia', ':date :method :url :status :paras');

var logger = morgan('itxia');

exports = module.exports = logger;
