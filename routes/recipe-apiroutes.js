// Dependencies
// =============================================================

// Requiring our models
var { User, Recipe } = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  // GET route for getting all of the posts
  app.get("/api/recipes", async function (req, res) {
    const query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // 1. Add a join here to include all of the Authors to these posts
    const allRecipes = await Recipe.findAll({
      where: query,
      include: [User],
    });
    res.json(allRecipes);
    // console.table(allRecipes);
  });

  // Get route for retrieving a single post
  app.get("/api/recipes/:id", async function (req, res) {
    // 2. Add a join here to include the Author who wrote the Post
    const singleRecipe = await Recipe.findOne({
      where: {
        id: req.params.id,
      },
      include: [User],
    });
    // console.log(singleRecipe);
    res.json(singleRecipe);
    console.log(singleRecipe);
  });

  // POST route for saving a new post
  app.post("/api/recipes", async function (req, res) {
    const newRecipe = await Recipe.create(req.body);
    res.json(newRecipe);
    console.log(newRecipe);
  });

  //   // DELETE route for deleting posts
  //   app.delete("/api/posts/:id", function (req, res) {
  //     db.Post.destroy({
  //       where: {
  //         id: req.params.id,
  //       },
  //     }).then(function (dbPost) {
  //       res.json(dbPost);
  //     });
  //   });

  //   // PUT route for updating posts
  //   app.put("/api/posts", function (req, res) {
  //     db.Post.update(req.body, {
  //       where: {
  //         id: req.body.id,
  //       },
  //     }).then(function (dbPost) {
  //       res.json(dbPost);
  //     });
  //   });
};
