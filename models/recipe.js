module.exports = function(sequelize, DataTypes) {
    const Recipe = sequelize.define("Recipe", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2]
        }
      },
      ingredients: {
        type: DataTypes.TEXT,
        allowNull: true,
        len: [5]
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      mealType : {
        type: DataTypes.BLOB,
        allowNull: true,
      }

    });
  };

  return Recipe;
};
