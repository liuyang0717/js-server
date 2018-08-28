var morgan = require('morgan');
var file = require('./file');

var morganLogStream = file.morganLogStream;

morgan.token('auths', function(req, res, next) {
  var auths = JSON.stringify(req.auth);
  return auths || '-';
  next();
})

morgan.token('paras', function(req, res, next) {
  var paras = JSON.stringify(req.body);
  return paras || '-';
  next();
});

morgan.format('itxia', ':date :method :url :status :auths :paras');

var logger = morgan('itxia', {
  stream: morganLogStream
});

exports = module.exports = logger;
