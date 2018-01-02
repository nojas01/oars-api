const models    = require('../models');
const passport  = require('../config/auth')
const express   = require('express');
const router    = express.Router();
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/config.js')[env];
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.database, config.username, config.password, config)

router.get('/ships', passport.authorize('jwt', {session: false }), (req, res, next) => {
  models.Ship.findAll()
    .then((ships) => res.json(ships))
    .catch((error) => next(error))
  });

router.get('/ships/:id', passport.authorize('jwt', {session: false }), (req, res, next) => {
  const id = req.params.id
  const question = "SELECT * FROM `Trainings` INNER JOIN `TrainingShips` ON TrainingShips.TrainingId = Trainings.id INNER JOIN `Ships` ON TrainingShips.ShipId = Ships.id WHERE Ships.id ="
  const queryForSql = question + id

  sequelize.query(queryForSql, { type: Sequelize.QueryTypes.SELECT})
    .then((ships) => {
      if (!ships) { return next() }
      res.json(ships)
    })
   .catch((error) => next(error))
  });

  router.post('/ships', passport.authorize('jwt', {session: false }), (req, res, next) => {
    const newShip = req.body

    models.Ship.create(newShip)
      .then((ship) => res.json(ship))
      .catch((error) => next(error))
  })

module.exports = router;
