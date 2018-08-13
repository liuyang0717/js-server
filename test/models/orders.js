var orders = require('../../src/models/orders');

var target = {};

orders.createOne(target, function(result) {
    console.log(result);
});
