var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/recipe", function(req, res) {

  });

  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("/api/recipe", function(req, res) {

  });

  // DELETE route for deleting todos. You can access the todo's id in req.params.id
  app.delete("/api/recipe/:id", function(req, res) {

  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/api/recipe", function(req, res) {

  });
};