module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  })
  User.associate = function(models) {
    User.hasMany(models.Training)
    User.hasMany(models.Rower)
  }
  return User
}
