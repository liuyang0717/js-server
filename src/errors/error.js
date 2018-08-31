var file = require('../file');

var errorLogStream = file.errorLogStream;
var readErrorJson = file.readErrorJson;

var error = exports = module.exports = {};

error.logErrors = function(err, req, res, next) {
  errorLogStream.write(err.message+'\n');
  next(err);
}

error.errorHandler = function(err, req, res, next) {
  readErrorJson(function(error, result) {
    if (error) {
      next(error);
    } else {
      var allHttPError = JSON.parse(result);
      for (var httpErrorIndex in allHttPError) {
        var httpError = allHttPError[httpErrorIndex];
        if (httpError !== err.name) {
          continue
        } else {
          res.status(httpErrorIndex);
        }
      }
    }
  })
}
