module.exports = (sequelize, DataTypes) => {
  const TrainingRower = sequelize.define('TrainingShip', {
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
  return TrainingRower
}
