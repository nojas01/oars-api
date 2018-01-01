'use strict'
module.exports = (sequelize, DataTypes) => {
  const Ship = sequelize.define('Ship', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  })
  Ship.associate = function(models) {
    Ship.belongsToMany(models.Training, {
      through: 'TrainingShip'
    })
    Ship.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
  }
  return Ship
}
