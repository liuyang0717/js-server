var Sequelize = require('sequelize');

var sequelize = require('../database');

var order = sequelize.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    updatedon: {
        type: 'TIMESTAMP',
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bbsid: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            isEmail: true
        }
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false
    },
    model: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    os: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    desc: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    reply: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    handler: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
},{
    timestamps: false,
    tableName: 'order'
});

exports = module.exports = order;
