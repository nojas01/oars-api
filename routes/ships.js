const models = require('../models');
const express = require('express');
const router = express.Router();

router.get('/ships', (req, res, next) => {
  models.Ship.findAll()
    .then((ships) => res.json(ships))
    .catch((error) => next(error))
  });

router.get('/ships/:id', (req, res, next) => {
  const id = req.params.id
  models.Ship.findById(id)
    .then((ship) => {
      if (!ship) { return next() }
      res.json(ship)
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
