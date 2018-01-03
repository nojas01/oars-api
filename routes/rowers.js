const models    = require('../models')
const passport  = require('../config/auth')
const express   = require('express')
const router    = express.Router()
const env       = process.env.NODE_ENV || 'development'
const config    = require(__dirname + '/../config/config.js')[env]
const Sequelize = require('sequelize')
const sequelize = new Sequelize(config.database, config.username, config.password, config)

router.get('/rowers', passport.authorize('jwt', {session: false }), (req, res, next) => {
  const UserId = req.account.id
  const question = "SELECT * FROM `Rowers` WHERE UserId =" + UserId
  sequelize.query( question, { type: Sequelize.QueryTypes.SELECT})
    .then((rowers) => res.json(rowers))
    .catch((error) => next(error))
})

router.get('/rowers/:id', passport.authorize('jwt', {session: false }), (req, res, next) => {
  const id = req.params.id
  const account = req.account.id
  const question = "SELECT * FROM `Trainings` INNER JOIN `TrainingRowers` ON TrainingRowers.TrainingId = Trainings.id INNER JOIN `Rowers` ON  TrainingRowers.RowerId = Rowers.id WHERE Rowers.id ="
  const queryForSql = question + id + " AND Trainings.UserId =" + account

  sequelize.query(queryForSql, { type: Sequelize.QueryTypes.SELECT })
    .then((rowers) => {
      if (!rowers) { return next() }
      res.json(rowers)
    })
    .catch((error) => next(error))
})

router.post('/rowers', passport.authorize('jwt', {session: false }), (req, res, next) => {
  const newRower = req.body
  newRower.UserId = req.account.id
  models.Rower.create(newRower)
    .then((rower) => res.json(rower))
    .catch((error) => next(error))
})
// first delete all content then replace.
router.post('/rowersToTraining', passport.authorize('jwt', {session: false }), (req, res, next) => {
  const rowers = req.body.rowers
  const trainingId = req.body.trainingId.toString() //has to be a string, not a number!
  const boat_number = req.body.boat_number_name.toString() //has to be a string, not a number!
  const shipId = req.body.shipId.toString()
  const queryForDBSql3 = "DELETE tr FROM TrainingRowers as tr WHERE TrainingId = " + trainingId + " AND boat_number = " + boat_number

  sequelize.query(queryForDBSql3, { type: Sequelize.QueryTypes.DELETE})
    .catch((error) => next(error))

  const queryForDBSql4 = "DELETE ts FROM TrainingShips as ts WHERE TrainingId = " + trainingId + " AND boat_number = " + boat_number

  sequelize.query(queryForDBSql4, { type: Sequelize.QueryTypes.DELETE})
    .catch((error) => next(error))

   //loop over rowers
  for (var i = 0; i < rowers.length; i++) {
    const values = "(" + rowers[i] + ", " + trainingId + ", " + boat_number + ")"
    const question = "INSERT INTO `TrainingRowers` (RowerId, TrainingId, boat_number) VALUES "
    const queryForDBSql = question + values

    sequelize.query(queryForDBSql, { type: Sequelize.QueryTypes.UPDATE})
      .catch((error) => next(error))
  }
    //connect ship with training

  const valueShip =  "(" + shipId + ", " + trainingId + ", " + boat_number + ")"
  const questionShip = "INSERT INTO `TrainingShips` (ShipId, TrainingId, boat_number) VALUES "
  const queryForDBSql2 = questionShip + valueShip

  sequelize.query(queryForDBSql2, { type: Sequelize.QueryTypes.UPDATE})
    .then((rower) => res.json(rower))
    .catch((error) => next(error))

})
//for getting rowers for boat in training
router.get('/rowersToTraining/:TrainingId/:boat_number',passport.authorize('jwt', {session: false }), (req, res, next) => {
  const TrainingId = req.params.TrainingId;
  const boat_number = req.params.boat_number;
  const UserId = req.account.id

  models.Rower.findAll({
    include: [{ model: models.Training,
      through: { attributes: ['TrainingId', 'RowerId', 'boat_number'],
        where: { TrainingId: +TrainingId, boat_number: +boat_number } }
    }], attributes: ['Id']
  })
  .then(function(rowers) {
    models.Ship.findAll({
        include: [{ model: models.Training,
          through: { attributes: ['TrainingId', 'ShipId', 'boat_number'],
            where: { TrainingId: +TrainingId, boat_number: +boat_number } }
        }], attributes: ['Id']
      })
    .then(function(ships) {
        res.json({
          ships: ships.filter(ship => ship.Trainings.length > 0 ),
          rowers: rowers.filter(rower => rower.Trainings.length > 0 )
        })
      });
   })
});


module.exports = router
