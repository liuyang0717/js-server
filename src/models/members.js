var Sequelize = require('sequelize');

var sequelize = require('./database');

sequelize.query("SELECT * FROM members").then(myTableRows => {
  console.log(myTableRows)
})
