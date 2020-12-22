$(document).ready(function () {
  const submitBtn = $(".submit");
  const titleInput = $("#title");
  const ingrInput = $("#ingredients");
  const descrInput = $("#description");
  const mealInput = $("#mealType");

  submitBtn.on("click", function (e) {
    e.preventDefault();

    const { title, ingredients, description, mealType } = {
      title: titleInput.val().trim(),
      ingredients: ingrInput.val().trim(),
      description: descrInput.val().trim(),
      mealType: mealInput.val().trim(),
    };

    if (!title || !ingredients || !description || !mealType) {
      return;
    }
    pushData(title, ingredients, description, mealType);

    titleInput.val("");
    ingrInput.val("");
    descrInput.val("");
    mealInput.val("");

    function pushData(title, ingredients, description, mealType) {
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
