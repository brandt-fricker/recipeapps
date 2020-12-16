const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

// -- CREATE TABLE `allcharacters` (
// -- 	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
// -- 	`routeName` VARCHAR( 255) NOT NULL,
// -- 	`name` VARCHAR( 255 ) NOT NULL,
// -- 	`role` VARCHAR( 255 ) NOT NULL,
// -- 	`age` Int(11) NOT NULL,
// -- 	`forcePoints` Int(11) NOT NULL,
// -- 	/* Set ID as primary key */
// -- 	PRIMARY KEY ( `id` )
// -- );
const Character = sequelize.define(
  "character",
  {
    routeName: Sequelize.STRING,
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    age: Sequelize.INTEGER,
    forcePoints: Sequelize.INTEGER,
  },
  { timestamps: false }
);

Character.sync();

module.exports = Character;
