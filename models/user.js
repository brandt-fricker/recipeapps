module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the Author model a name of type STRING
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  
    User.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      User.hasMany(models.Recipe, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };