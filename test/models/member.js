var members = require('../../src/models/member');

members.findById(264, function(result) {
    console.log(result);
});
