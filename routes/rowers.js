const models = require('../models');
const express = require('express');
const router = express.Router();

router.get('/rowers', (req, res, next) => {
  models.Rower.findAll()
    .then((rowers) => res.json(rowers))
    .catch((error) => next(error))
  });

router.get('/rowers/:id', (req, res, next) => {
  const id = req.params.id
  models.Rower.findById(id)
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
