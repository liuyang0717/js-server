var members = require('../../src/models/members');

var target = {};

members.findAll(null, function(result) {
    console.log(result);
});
