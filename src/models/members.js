var member = require('./config/member');

var members = exports = module.exports = {};

members.createOne = function(target, callback) {
  member.create(target)
    .then(result => {
      callback(result);
    })
    .catch();
};

members.findOne = function(target, callback) {
  member.findOne({
      where: target
    })
    .then(result => {
      callback(result);
    })
    .catch();
};

members.findAll = function(target, callback) {
  member.findAll({
      where: target
    })
    .then(result => {
      callback(result)
    })
    .catch();
};
