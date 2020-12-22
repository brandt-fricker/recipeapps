// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const axios = require("axios");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("index");
    }

    res.render("signup");
  });
//Path to the log in HTML page when logged in 
  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("index");
    }

    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    res.render("index");
  });
//GET route for the api used on the random generator button when logged in 
  app.get("/get-random", isAuthenticated, async function (req, res) {
    let queryUrl =
      `https://api.spoonacular.com/recipes/random?number=1&apiKey=${process.env.APIKEY}`;

    let hbsObject = {
      title: "",
      ingredients: "",
      description: "",
      mealType: "",
    };
//axios call to access information from api
    await axios.get(queryUrl).then(function (response) {
      hbsObject.title += response.data.recipes[0].title;
      hbsObject.ingredients += response.data.recipes[0].extendedIngredients.map(
        ({ original }) => original
      );
      hbsObject.description += response.data.recipes[0].instructions + " , ";
      hbsObject.mealType += response.data.recipes[0].image;

      console.log(response);
      console.log(hbsObject.ingredients);
    });
    console.log(hbsObject, "hello");
    res.render("recipe", hbsObject);
  });
//Path to the main HTML page when logged in 
  app.get("/main", isAuthenticated, function (req, res) {
    res.render("index");
  });
//Path to the add recipe HTML handlebars page when logged in 
  app.get("/addRecipe", isAuthenticated, function (req, res) {
    res.render("addRecipe");
  });
};
