const models = require('../models')
const express = require('express')
const router = express.Router()
const passport = require('../config/auth')

router
  .get('/trainings', passport.authorize('jwt', {session: false }), function(req, res) {
    models.Training.findAll({ where: { UserId: req.account.id }})
    .then(function(trainings) {
      res.json(trainings)
      })
  })

  .get('/trainings/:id', passport.authorize('jwt', {session: false }), (req, res, next) => {
    const id = req.params.id
    models.Training.findById(id)
      .then((training) => {
        if (!training || training.UserId != req.account.id) { return next() }
        res.json(training)
      })
      .catch((error) => next(error))
  })

  .post('/trainings', passport.authorize('jwt', {session: false }), (req, res, next) => {
      const newTraining = req.body
      newTraining.UserId = req.account.id
      
      models.Training.create(newTraining)
        .then((training) => {
          res.json(training)

        })
        .catch((error) => next(error))
  })

module.exports = router
