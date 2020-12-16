// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var orm = require("../config/orm.js");
const Character = require("../models/character");

// Routes
// =============================================================
module.exports = function (app) {
  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", function (req, res) {
    // If the user provides a specific character in the URL...
    if (req.params.characters) {
      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      // orm.searchCharacter(req.params.characters, function (data) {
      //   res.json(data);
      // });
      Character.findOne({
        where: {
          routeName: req.params.characters,
        },
      }).then(function (character) {
        res.json(character);
      });
    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the characters.
      // (Note how we're using the ORM here to run our searches)
      // orm.allCharacters(function(data) {
      //   res.json(data);
      // });
      Character.findAll().then(function (characters) {
        res.json(characters);
      });
    }
  });

  // If a user sends data to add a new character...
  app.post("/api/new", function (req, res) {
    // Take the request...
    var character = {
      ...req.body,
      routeName: req.body.name.replace(/\s+/g, "").toLowerCase(),
    };

    // Then send it to the ORM to "save" into the DB.
    // orm.addCharacter(character, function(data) {
    //   console.log(data);
    // });
    console.log(character);
    Character.create(character).then(function () {
      res.status(200).end();
    });
  });
};
