module.exports = (sequelize, DataTypes) => {
  const TrainingShip = sequelize.define('TrainingShip', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    boat_number:
      {
        type: DataTypes.INTEGER,
        length: 1
      }
  })
  return TrainingShip
}
