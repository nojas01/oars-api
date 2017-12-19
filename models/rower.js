'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rower = sequelize.define('Rower', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  Rower.associate = function(models) {
    Rower.belongsToMany(models.Training, { through: 'TrainingRower' });
  };
  return Rower;
};
