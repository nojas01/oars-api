module.exports = (sequelize, DataTypes) => {
  const Training = sequelize.define('Training', {
    startdate: DataTypes.DATEONLY,
    starttime: DataTypes.TIME,
    duration: DataTypes.TIME,
    UserId: DataTypes.INTEGER,
    boat_1_name: DataTypes.STRING,
    boat_2_name: DataTypes.STRING,
    boat_3_name: DataTypes.STRING,
    boat_4_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  Training.associate = function(models) {
    Training.belongsToMany(models.Ship, {
      through: 'TrainingShip'
    });
    Training.belongsToMany(models.Rower, {
      through: 'TrainingRower'
    });
    Training.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Training;
};
