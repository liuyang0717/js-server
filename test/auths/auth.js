var fs = require('fs');
var path = require('path');

var file = path.resolve(__dirname, '../../src/auth.json');

fs.readFile(file, 'utf-8', function(error, result) {
  if (error) {
    throw error
  } else {
    var target = JSON.parse(result);
    for (var i in target) {
      console.log(target[i]);
    }
  }
})
