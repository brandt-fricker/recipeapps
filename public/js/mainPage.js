$(document).ready(function () {
  const getRandomBtn = $("#getRandom");
  const getAllBtn = $(".getAll");
  const getSpecificBtn = $(".getSpecific");
  const addYourBtn = $(".addYour");
  const updateYourBtn = $(".updateYour");
  const deleteYourBtn = $(".deleteYour");
  const saveRecipe = $(".saveBtn");
  const titleInput = $("#foodTitle");
  const descrInput = $("#foodDecsript");
  const mealInput = $("#foodType");

  // getRandomBtn.on("click", function(e) {
  //     e.preventDefault();

  //     $.ajax("/api/get-random", {
  //         method: "GET",
  //     }).then(function (data) {

  //     });
  // });

  getAllBtn.on("click", function (e) {
    e.preventDefault();

    $.ajax("api/recipes", {
      type: "GET",
    }).then(function (data) {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        let title = $("<p>")
          .attr("class", "foodDataTitle")
          .attr("id", "foodTitle")
          .text(`Recipe name - ${data[i].title}`);
        console.log(data[i].title);

        let ingredients = $("<p>")
          .attr("class", "foodDataIngred")
          .attr("id", "foodIngred")
          .text(`Ingredients: ${data[i].ingredients}`);

        let description = $("<p>")
          .attr("class", "foodDataDescript")
          .attr("id", "foodDecsript")
          .text(`Description: ${data[i].description}`);

        let mealType = $("<img>")
          .attr("class", "foodDataType")
          .attr("id", "foodType")
          .attr("src", data[i].mealType);

        $(".recipe-container").append(
          $("<div>")
            .attr("class", "recipeDiv")
            .append(mealType, title, ingredients, description)
        );
      }
    });


    
  });

//   saveRecipe.on("click", function (e) {
//     e.preventDefault();
//     $.get("/api/user_data").then(function (data) {
//       userId = data.id;
//       console.log(userId);
//     });

//     const { title, description, mealType, UserId } = {
//       title: titleInput.val().trim(),
//     //   ingredients: ingrInput.val().trim(),
//       description: descrInput.val().trim(),
//       mealType: mealInput.val().trim(),
//       UserId: userId,
//     };
// // console.log(title, description, mealType, UserId)

//     if (!title || !description || !mealType || !UserId) {
//       return;
//     }
//     pushData(title, description, mealType, UserId);

//     titleInput.val("");
//     // ingrInput.val("");
//     descrInput.val("");
//     mealInput.val("");

//     function pushData(title, description, mealType, UserId) {
//       $.post("/api/save-recipes", {
//         title: title,
//         // ingredients: ingredients,
//         description: description,
//         mealType: mealType,
//         UserId: userId,
//       }).then(function (data) {
//         console.log(data, "Success!");
//       });
//     }
//   });
});
