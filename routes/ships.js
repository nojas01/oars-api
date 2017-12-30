const models = require('../models');
const express = require('express');
const router = express.Router();
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.js')[env];

router.get('/ships', (req, res, next) => {
  models.Ship.findAll()
    .then((ships) => res.json(ships))
    .catch((error) => next(error))
  });

router.get('/ships/:id', (req, res, next) => {
  const id = req.params.id
  const Sequelize = require('sequelize');
  const sequelize = new Sequelize(config.database, config.username, config.password, config)
  const question = "SELECT * FROM `Trainings` INNER JOIN `TrainingShip` ON TrainingShip.trainingid = Trainings.id INNER JOIN `Ships` ON TrainingShip.shipid = Ships.id WHERE Ships.id ="
  const queryForSql = question + id

  sequelize.query(queryForSql, { type: Sequelize.QueryTypes.SELECT})
    .then((ships) => {
      if (!ships) { return next() }
      res.json(ships)
    })
   .catch((error) => next(error))
  });

  router.post('/ships', (req, res, next) => {
    const newShip = req.body

    models.Ship.create(newShip)
      .then((ships) => res.json(ships))
      .catch((error) => next(error))
  })

module.exports = router;
