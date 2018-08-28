var file = require('./file');

var errorLogStream = file.errorLogStream;

var error = exports = module.exports = {};

error.logErrors = function(err, req, res, next) {
  errorLogStream.write(err.message+'\n');
  next(err);
}

error.errorHandler = function(err, req, res, next) {
  // generate resData
  var resData = {};
  resData['success'] = false;
  resData['error'] = err.message;
  res.json(resData);
  res.end();
  next();
}
