const models    = require('../models')
const passport  = require('../config/auth')
const express   = require('express')
const router    = express.Router()
const env       = process.env.NODE_ENV || 'development'
const config    = require(__dirname + '/../config/config.js')[env]
const Sequelize = require('sequelize')
const sequelize = new Sequelize(config.database, config.username, config.password, config)

router.get('/rowers', passport.authorize('jwt', {session: false }), (req, res, next) => {
  sequelize.query("SELECT * FROM `Rowers`", { type: Sequelize.QueryTypes.SELECT})
    .then((rowers) => res.json(rowers))
    .catch((error) => next(error))
})

router.get('/rowers/:id', passport.authorize('jwt', {session: false }), (req, res, next) => {
  const id = req.params.id
  const account = req.account.id
  const question = "SELECT * FROM `Trainings` INNER JOIN `TrainingRower` ON TrainingRower.trainingid = Trainings.id INNER JOIN `Rowers` ON  TrainingRower.rowerid = Rowers.id WHERE Rowers.id ="
  const queryForSql = question + id

  sequelize.query(queryForSql, { type: Sequelize.QueryTypes.SELECT})
    .then((rowers) => {
      if (!rowers) { return next() }
      res.json(rowers)
    })
     .catch((error) => next(error))
})

router.post('/rowers', passport.authorize('jwt', {session: false }), (req, res, next) => {
  const newRower = req.body

  models.Rower.create(newRower)
    .then((rower) => res.json(rower))
    .catch((error) => next(error))
})

router.post('/rowersToTraining', passport.authorize('jwt', {session: false }), (req, res, next) => {
  const rowers = req.body.rowers
  const trainingId = req.body.trainingId.toString() //has to be a string, not a number!
  const boat_number = req.body.boat_number_name.toString()//has to be a string, not a number!
  const shipId = req.body.shipId.toString()

  //loop over rowers
  for (var i = 0; i < rowers.length; i++) {
    const values = "(" + rowers[i] + ", " + trainingId + ", " + boat_number + ")"
    const question = "INSERT INTO `TrainingRower` (RowerId, TrainingId, boat_number) VALUES "
    const queryForDBSql = question + values

    sequelize.query(queryForDBSql, { type: Sequelize.QueryTypes.UPDATE})
      .then((rower) => res.json(rower))
      .catch((error) => next(error))
  }
    //connect ship with training
  const valueShip =  "(" + shipId + ", " + trainingId + ", " + boat_number + ")"
  const questionShip = "INSERT INTO `TrainingShip` (ShipId, TrainingId, boat_number) VALUES "
  const queryForDBSql2 = questionShip + valueShip

  sequelize.query(queryForDBSql2, { type: Sequelize.QueryTypes.UPDATE})
   .then((rower) => res.json(rower))
   .catch((error) => next(error))

})

router.get('/rowersToTraining/:TrainingId/:boat_number', passport.authorize('jwt', {session: false }), (req, res, next) => {
 const TrainingId = req.params.TrainingId;
 const boat_number = req.params.boat_number;

 models.Rower.findAll({
     include: [{
       model: models.Training,
       through: {
         attributes: ['TrainingId', 'RowerId', 'boat_number'],
         where: {
           TrainingId: +TrainingId,
           boat_number: +boat_number,

         }
       }
     }],
     attributes: ['Id']
   })
   .then(function(rowers) {
     models.Ship.findAll({
         include: [{
           model: models.Training,
           through: {
             attributes: ['TrainingId', 'ShipId', 'boat_number'],
             where: {
               TrainingId: +TrainingId,
               boat_number: +boat_number
             }
           }
         }],
         attributes: ['Id']
       })
    .then(function(ships) {
        res.json({
          ships: ships.filter(ship => ship.Trainings.length > 0),
          rowers: rowers.filter(rower => rower.Trainings.length > 0)
        })
      });
   })
});


module.exports = router
