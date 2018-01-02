module.exports = (sequelize, DataTypes) => {
  const TrainingRower = sequelize.define('TrainingRower', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    boat_number: { type: DataTypes.INTEGER, length: 1 },
    TrainingId: DataTypes.INTEGER,
    RowerId: DataTypes.INTEGER
  })

  return TrainingRower
}
