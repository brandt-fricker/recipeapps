module.exports = function (sequelize, DataTypes) {
  const Recipe = sequelize.define("Recipe", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2],
      },
    },
    ingredients: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [5],
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    mealType: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [5],
    },
  });

  Recipe.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Recipe.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Recipe;
};
