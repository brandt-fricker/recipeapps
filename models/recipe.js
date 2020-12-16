module.exports = function(sequelize, DataTypes) {
    var recipe = sequelize.define("recipe", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [10]
        }
      },
      ingredients: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [30]
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      mealType : {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [5]
      }

    });
  
    recipe.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      recipe.belongsTo(models.user, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return recipe;
  };