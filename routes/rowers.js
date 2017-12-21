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

  models.Rower.create(newRower)
    .then((rower) => res.json(rower))
    .catch((error) => next(error))
  })

module.exports = router;
