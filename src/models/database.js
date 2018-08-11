var Sequelize = require('sequelize');

var sequelize = new Sequelize('test', 'test', 'test', {
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    }
});

exports = module.exports = sequelize;
