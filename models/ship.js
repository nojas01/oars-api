'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ship = sequelize.define('Ship', {
    name: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  Ship.associate = function(models) {
    Ship.belongsToMany(models.Training, { through: 'TrainingShip' });
  };
  return Ship;
};
