const models = require('../models');
const express = require('express');
const router = express.Router();

router.get('/trainings', function(req, res) {
  models.Training.findAll({
      include: [{
        model: models.User,
        where: {
          id: 1
        }
      }]
    }).then(function(trainings) {
      res.json(trainings);
    });
  });

router.get('/trainings/:id', function(req, res) {
  models.Training.findAll({
      include: [{
        model: models.User,
        where: {
          id: req.params.userId
        }
      }]
    }).then(function(trainings) {
      res.json(trainings);
    });
  });

  router.post('/trainings', (req, res, next) => {
    console.log(req);
      const newTraining = req.body

      models.Training.create(newTraining)
        .then((training) => {
          res.json(training)

        })
        .catch((error) => next(error))
  })


module.exports = router;
