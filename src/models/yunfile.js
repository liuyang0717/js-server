var Sequelize = require('sequelize');

var sequelize = require('./database');

var yunfile = sequelize.define('yunfile', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    time: {
        type: 'TIMESTAMP',
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    oid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ext: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'yunfile'
});

var yunfiles = exports = module.exports = {};
