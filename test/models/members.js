var members = require('../../src/models/members');

members.findById(264, function(result) {
    console.log(result);
});
