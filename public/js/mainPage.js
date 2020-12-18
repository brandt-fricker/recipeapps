$(document).ready(function () {

    const getRandomBtn = $("#getRandom");
    const getAllBtn = $(".getAll");
    const getSpecificBtn = $(".getSpecific");
    const addYourBtn = $(".addYour");
    const updateYourBtn = $(".updateYour");
    const deleteYourBtn = $(".deleteYour");
    const saveRecipe = $(".saveBtn");


    getRandomBtn.on("click", function(e) {
        e.preventDefault();

        console.log("HI!");

        let queryUrl = "https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian,dessert"

        $.ajax({
            url: queryUrl,
            method: "GET",
        }).then(function (response) {
            console.log(response);
            console.log("done")
        });
    });

    getAllBtn.on("click", function(e){
        e.preventDefault();

        $.ajax("api/recipes", {
            type: "GET",
        }).then(function(data){
            console.log(data)
            for (let i = 0; i < data.length; i++) {
              let saveBtn = $("<button>")
              .attr("class", "saveBtn btn-primary text-white")
              .text("Save Recipe");
              let title = $("<p>")
              .attr("class", "foodDataTitle")
              .attr("id", "foodTitle")
              .text(`Recipe name - ${data[i].title}`);
              console.log(data[i].title)

              let ingredients = $("<p>")
              .attr("class", "foodDataIngred")
              .attr("id", "foodIngred")
              .text(`Ingredients: ${data[i].ingredients}`);

              let description = $("<p>")
              .attr("class", "foodDataDescript")
              .attr("id", "foodDecsript")
              .text(`Description: ${data[i].description}`);

              let mealType = $("<p>")
              .attr("class", "foodDataType")
              .attr("id", "foodType")
              .text(`Meal Type: ${data[i].mealType}`);


                $(".recipe-container").append(
                    $("<div>")
                    .attr("class", "recipeDiv")
                    .append(title, ingredients, description, mealType, saveBtn)
                );
            }
        })
    })


    saveRecipe.on("click", function(e) {
        e.preventDefault();


    })
    
});