var orders = require('../../src/models/orders');

orders.findAll({}, function(result) {
    console.log(result);
});
