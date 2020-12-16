var Sequelize = require("sequelize");
// const { strictRight } = require("sequelize/types/lib/operators");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("./connection");

// Creates a "Chirp" model that matches up with DB
var character = sequelize.define("character", {
  routeName: Sequelize.STRING,
  name: Sequelize.STRING,
  role: Sequelize.STRING,
  age: Sequelize.INTEGER,
  forcePoints: Sequelize.INTEGER
},
{timestamps : false});



// Syncs with DB
character.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = character;