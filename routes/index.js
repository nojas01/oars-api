var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/trainings/:userId', function(req, res) {
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

module.exports = router;
