const models    = require('../models')
const express   = require('express')
const router    = express.Router()
const env       = process.env.NODE_ENV || 'development'
const config    = require(__dirname + '/../config/config.js')[env]
const Sequelize = require('sequelize')
const sequelize = new Sequelize(config.database, config.username, config.password, config)

router.get('/rowers', (req, res, next) => {
  sequelize.query("SELECT * FROM `Rowers`", { type: Sequelize.QueryTypes.SELECT})
    .then((rowers) => res.json(rowers))
    .catch((error) => next(error))
  })

router.get('/rowers/:id', (req, res, next) => {
  const id = req.params.id
  const question = "SELECT * FROM `Trainings` INNER JOIN `TrainingRower` ON TrainingRower.trainingid = Trainings.id INNER JOIN `Rowers` ON  TrainingRower.rowerid = Rowers.id WHERE Rowers.id ="
  const queryForSql = question + id

  sequelize.query(queryForSql, { type: Sequelize.QueryTypes.SELECT})
    .then((rowers) => {
      if (!rowers) { return next() }
      res.json(rowers)
    })
     .catch((error) => next(error))
  })

router.post('/rowers', (req, res, next) => {
  const newRower = req.body

  models.Rower.create(newRower)
    .then((rower) => res.json(rower))
    .catch((error) => next(error))
  })

router.post('/rowersToTraining', (req, res, next) => {
  const TrainingId = req.body.TrainingId.toString() //has to be a string, not a number!
  const boat_number = req.body.boat_number.toString()//has to be a string, not a number!
  const array = req.body.RowerId

  const newArray = array.map((id) => {
    const RowerId = id.toString() //has to be a string, not a number!
    const values = "(" + RowerId + ", " + TrainingId + ", " + boat_number + ")"
    const question = "INSERT INTO `TrainingRower` (RowerId, TrainingId, boat_number) VALUES"
    const queryForDBSql = question + values

    sequelize.query(queryForDBSql, { type: Sequelize.QueryTypes.UPDATE})
    .then((rower) => res.json(rower))
    .catch((error) => next(error))
  })
})

module.exports = router
