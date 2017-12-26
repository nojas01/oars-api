const models = require('../models');
const express = require('express');
const router = express.Router();
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.js')[env];

router.get('/rowers', (req, res, next) => {
  const Sequelize = require('sequelize');
  const sequelize = new Sequelize(config.database, config.username, config.password, config)
  sequelize.query("SELECT * FROM `Rowers`", { type: Sequelize.QueryTypes.SELECT})
    .then((rowers) => res.json(rowers))
    .catch((error) => next(error))
  });

router.get('/rowers/:id', (req, res, next) => {
  const id = req.params.id
  const Sequelize = require('sequelize');
  const sequelize = new Sequelize(config.database, config.username, config.password, config)
  const question = "SELECT * FROM `Trainings` INNER JOIN `TrainingRower` ON TrainingRower.trainingid = Trainings.id INNER JOIN `Rowers` ON  TrainingRower.rowerid = Rowers.id WHERE Rowers.id ="
  const queryForSql = question + id

  sequelize.query(queryForSql, { type: Sequelize.QueryTypes.SELECT})
    .then((rowers) => {
      if (!rowers) { return next() }
      res.json(rowers)
    })
     .catch((error) => next(error))
  });

router.post('/rowers', (req, res, next) => {
  const newRower = req.body
  console.log(newRower)
  models.Rower.create(newRower)
    .then((rower) => res.json(rower))
    .catch((error) => next(error))
  }) ;

  router.post('/rowersToTraining', (req, res, next) => {
   const rowers = req.body.rowers;
   const trainingId = req.body.trainingId.toString(); //has to be a string, not a number!
   const boat_number = req.body.boat_number_name.toString();//has to be a string, not a number!
   const shipId = req.body.shipId.toString();
   const Sequelize = require('sequelize');
   const sequelize = new Sequelize(config.database, config.username, config.password, config)

   //loop over rowers
   for (var i = 0; i < 4; i++) {
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

module.exports = router;
