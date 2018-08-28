var Sequelize = require('sequelize');
var file = require('../file');

var sequelizeLogStream = file.sequelizeLogStream;

var sequelize = new Sequelize('test', 'test', 'test', {
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    },
    logging: function(log) {
      sequelizeLogStream.write(log+'\n');
    }
});

exports = module.exports = sequelize;
