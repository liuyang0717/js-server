var fs = require('fs');

var file = './auth.json';

fs.readFile(file, 'utf-8', function(error, content) {
  if (error) throw error;
  console.log(content);
})
