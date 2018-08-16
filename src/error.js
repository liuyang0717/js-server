var error = exports = module.exports = {};

error.appError = function(err, req, res, next) {
  // generate resData
  var resData = {};
  resData['success'] = false;
  resData['error'] = err.stack;
  res.json(resData);
  res.end();
  next();
}
