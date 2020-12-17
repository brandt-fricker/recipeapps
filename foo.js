const db = require("./models");

db.sequelize.sync().then(async function () {
  const newUser = await db.User.create({
    name: "Ricky",
    title: "Chief",
  });

  const recipe = await db.Recipe.create({
    title: "Hiiiii",
    ingredients: "world!",
    description: "Blahblah",
    mealType: "dinner",
    UserId: newUser.id,
  });
  console.log(recipe.toJSON());

  const user = await db.User.findOne({
    where: { id: 1 },
    include: [db.Recipe],
  });

  console.log(user.toJSON());
});
