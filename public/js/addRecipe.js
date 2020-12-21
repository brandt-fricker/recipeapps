$(document).ready(function () {
  // variables for use
  const submitBtn = $(".submit");
  const titleInput = $("#title");
  const ingrInput = $("#ingredients");
  const descrInput = $("#description");
  const mealInput = $("#mealType");
  var userId = "";

  submitBtn.on("click", function (e) {
    e.preventDefault();

    $.get("/api/user_data").then(function (data) {
      userId = data.id;
      console.log(userId);
    });

    // deconstruction of variables to get their values for use
    const { title, ingredients, description, mealType, UserId } = {
      title: titleInput.val().trim(),
      ingredients: ingrInput.val().trim(),
      description: descrInput.val().trim(),
      mealType: mealInput.val().trim(),
      UserId: userId,
    };
    // Ensures app can run, if not returns and time to troubleshoot
    if (!title || !ingredients || !description || !mealType || !UserId) {
      return;
    }
    pushData(title, ingredients, description, mealType, UserId);

    titleInput.val("");
    ingrInput.val("");
    descrInput.val("");
    mealInput.val("");

    // call to post data into database
    function pushData(title, ingredients, description, mealType, UserId) {
      $.post("/api/add-recipes", {
        title: title,
        ingredients: ingredients,
        description: description,
        mealType: mealType,
        UserId: userId,
      }).then(function (data) {
        console.log(data, "Success!");
      });
    }
  });
});
