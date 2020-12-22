$(document).ready(function () {
  const getRandomBtn = $("#getRandom");
  const getAllBtn = $(".getAll");
  const deleteBtn = $(".deleteBtn");
//get all button functionality on main page
  getAllBtn.on("click", function (e) {
    e.preventDefault();
    $(".recipe-container").empty();
//ajax call to get to teh recipes api on the back end api routes
    $.ajax("api/recipes", {
      type: "GET",
    }).then(function (data) {
        //a for loop to dislay the data from the recipe on the click
      for (let i = 0; i < data.length; i++) {
        let idOfElement = data[i].id;
 
        let title = $("<p>")
          .attr("class", "foodDataTitle")
          .attr("id", "foodTitle")
          .text(`Recipe name - ${data[i].title}`);

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

        let deleteBtn = $("<button>")
          .attr("class", "deleteBtn")
          .text("Delete Recipe");

        $(".recipe-container").append(
          $("<div>")
            .attr("class", "recipeDiv")
            .attr("id", idOfElement)
            .append(mealType, title, ingredients, description, deleteBtn)
        );
        deleteBtn.on("click", function () {
          // Make sure to preventDefault on a submit event.

          console.log("Oops", idOfElement);

          const id = idOfElement;

          // Send the DELETE request.
          $.ajax({
            url: "/api/delete-recipe/" + id,
            method: "DELETE",
          }).then(function () {
            console.log("Deleted!");
            
          });
          $(this).closest(".recipeDiv").remove();
        });
        console.log(idOfElement);
      }
    });
  });
});
