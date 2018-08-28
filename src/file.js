var fs = require('fs');
var path = require('path');

var file = exports = module.exports = {};

file.readAuthJson = function(callback) {
  // file path
  var filePath = path.resolve(__dirname, './auths/auth.json');
  fs.readFile(filePath, 'utf-8', callback);
};

file.morganLogStream = fs.createWriteStream(
  path.resolve(__dirname, '../logs/server.log'),
  'utf-8',
  {
    flags: 'a'
  }
);

file.sequelizeLogStream = fs.createWriteStream(
  path.resolve(__dirname, '../logs/database.log'),
  'utf-8',
  {
    flags: 'a'
  }
);

file.errorLogStream = fs.createWriteStream(
  path.resolve(__dirname, '../logs/error.log'),
  'utf-8',
  {
    flags: 'a'
  }
);
