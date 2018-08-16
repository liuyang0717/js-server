var reply = require('./config/reply');

var replies = exports = module.exports = {};

replies.create = function(target, callback) {
  reply.create(target)
    .then(result => {
      callback(null, result);
    })
    .catch(error => {
      callback(error);
    });
};

replies.findOne = function(target, callback) {
  reply.findOne({
      where: target
    })
    .then(result => {
      callback(null, result);
    })
    .catch(error => {
      callback(error);
    });
};

replies.findAll = function(target, callback) {
  reply.findAll({
      where: target
    })
    .then(result => {
      callback(null, result)
    })
    .catch(error => {
      callback(error);
    });
};

replies.update = function(value, target, callback) {
  reply.update(value, {
    where: target
  })
  .then(result => {
    callback(null, result)
  })
  .catch(error => {
    callback(error);
  });
};
