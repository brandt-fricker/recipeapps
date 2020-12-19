// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
const axios = require("axios");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      // res.redirect("/members");
      res.render("index");
    }
    // res.sendFile(path.join(__dirname, "../public/signup.html"));
    res.render("signup");
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      // res.redirect("/members");
      res.render("index");
    }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("index");
  });

  app.get("/get-random", async function (req, res) {
    let queryUrl =
      "https://api.spoonacular.com/recipes/random?number=1&apiKey=ba3cef0a320c41c5bbd79cbab4cf8d92";
    
      let hbsObject = {
      
        title: "",
        instructions: '',
        image: '',
     
        
      };

    await axios.get(queryUrl).then(function (response) {

        hbsObject.title += response.data.recipes[0].title;
        hbsObject.instructions += response.data.recipes[0].instructions + " , ";
        hbsObject.image += response.data.recipes[0].image;

    console.log(response)

    });
    console.log(hbsObject, "hello");
    res.render("recipe", hbsObject);
  });

  app.get("/main", isAuthenticated, function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("index");
  });

  app.get("/addRecipe", isAuthenticated, function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/members.html"));
    res.render("addRecipe");
  });



};
