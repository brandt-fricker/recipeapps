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
  
    Recipe.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Recipe.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Recipe;
  };