$(document).ready(function () {
  //creating variables to access information on handlebars page
  const submitBtn = $(".submit");
  const titleInput = $("#title");
  const ingrInput = $("#ingredients");
  const descrInput = $("#description");
  const mealInput = $("#mealType");
//submi button functionality 
  submitBtn.on("click", function (e) {
    e.preventDefault();
    //taking the information from the handlebars objects displayed on the HTML page
    const { title, ingredients, description, mealType } = {
      title: titleInput.val().trim(),
      ingredients: ingrInput.val().trim(),
      description: descrInput.val().trim(),
      mealType: mealInput.val().trim(),
    };
    
    if (!title || !ingredients || !description || !mealType) {
      return;
    }
    //calling push data function
    pushData(title, ingredients, description, mealType);

    titleInput.val("");
    ingrInput.val("");
    descrInput.val("");
    mealInput.val("");

    function pushData(title, ingredients, description, mealType) {
      //push data function posts the information from the handlebars object on the HTML page to the address /api/save-recipes as a json object
      $.post("/api/add-recipes", {
        title: title,
        ingredients: ingredients,
        description: description,
        mealType: mealType,
      }).then(function (data) {
        console.log(data, "Success!");
      });
    }
  });
});
