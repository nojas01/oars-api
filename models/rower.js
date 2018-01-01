'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rower = sequelize.define('Rower', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  })
  Rower.associate = function(models) {
    Rower.belongsToMany(models.Training, { through: 'TrainingRower' })
    Rower.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
  }
  return Rower
}
