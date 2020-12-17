const { User, Recipe } = require("../models");

module.exports = function (app) {
  app.get("/api/users", async function (req, res) {
    const allUsers = await User.findAll({});
      res.json(allUsers);
      console.log(allUsers);
    
  });

  app.get("/api/users/:id", async function (req, res) {
    // 2; Add a join to include all of the Author's Posts here
    try {
      const singleUser = await User.findOne({
        where: {
          id: req.params.id,
        },
        include: [db.Recipe],
      });
      res.json(singleUser);
      console.log(singleUser);
    } catch (error) {
      res.status(500).end();
    }
  });

  app.post("/api/users", async function(req, res) {
    const newUser = await User.create(req.body);
      res.json(newUser);
      console.log(newUser.toJSON());
  
  });

  // app.delete("/api/authors/:id", function(req, res) {
  //   db.Author.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbAuthor) {
  //     res.json(dbAuthor);
  //   });
  // });
};
