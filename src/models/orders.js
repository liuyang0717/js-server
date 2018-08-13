var order = require('./config/order');
var reply = require('./config/reply');
var yunfile = require('./config/yunfile');

order.hasMany(reply, {
  foreignKey: 'orderid'
});
order.hasMany(yunfile, {
  foreignKey: 'oid'
});

reply.belongsTo(order, {
  foreignKey: 'orderid'
});

yunfile.belongsTo(order, {
  foreignKey: 'oid'
});

var orders = exports = module.exports = {};

orders.create = function(target, callback) {
  order.create(target)
    .then(result => {
      callback(result);
    });
};

orders.findOne = function(target, callback) {
  order.findOne({
      where: target,
      include: [{
        model: reply
      }, {
        model: yunfile
      }]
    })
    .then(result => {
      callback(result);
    });
};

orders.findAll = function(target, callback) {
  order.findAll({
      where: target,
      include: [{
        model: reply
      }, {
        model: yunfile
      }]
    })
    .then(result => {
      callback(result)
    })
};

orders.update = function(value, target, callback) {
  order.update(value, {
    where: target
  })
  .then(result => {
    callback(result)
  })
  .catch();
};

orders.destroy = function(target, callback) {
  order.destroy({
      where: target,
      include: [{
        model: reply
      }, {
        model: yunfile
      }]
    })
    .then(result => {
      callback(result)
    })
};
