var Sequelize = require('sequelize');

var sequelize = require('../database');

var reply= sequelize.define('reply', {
    index: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    replybool: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    orderid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    itxiaid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    time: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'reply'
});

exports = module.exports = reply;
