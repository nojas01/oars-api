const models = require('../models')
const express = require('express')
const router = express.Router()
const passport = require('../config/auth')

router
  .get('/trainings', passport.authorize('jwt', {session: false }), function(req, res) {
    models.Training.findAll({
      include:[{
        model: models.User,
        where: {
          id: req.account.id
        }
      }]
    }).then(function(trainings) {
      res.json(trainings)
      })
  })

  .get('/trainings/:id', (req, res, next) => {
    const id = req.params.id
    models.Training.findById(id)
      .then((training) => {
        if (!training) { return next() }
        res.json(training)
      })
      .catch((error) => next(error))
  })

  .post('/trainings', (req, res, next) => {
      const newTraining = req.body
      models.Training.create(newTraining)
        .then((training) => {
          res.json(training)

        })
        .catch((error) => next(error))
  })

module.exports = router
