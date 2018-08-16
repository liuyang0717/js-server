var fs = require('fs');
var path = require('path');

var file = exports = module.exports = {};

file.readAuthJson = function(callback) {
  // file path
  var filePath = path.resolve(__dirname, './auth.json');
  fs.readFile(filePath, 'utf-8', callback);
};
