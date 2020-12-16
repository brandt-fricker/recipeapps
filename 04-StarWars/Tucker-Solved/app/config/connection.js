// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
const Sequelize = require("sequelize");


// Creating our connection
const sequelize = new Sequelize("starwars", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql"
});

// Exporting our connection
module.exports = sequelize;
