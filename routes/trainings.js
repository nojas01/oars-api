const models = require('../models')
const express = require('express')
const multer  = require('multer')
const router = express.Router()
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })

router
  .get('/trainings', function(req, res) {
    models.Training.findAll()

      .then(function(trainings) {
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

  .post('/trainings', upload.single('training'), (req, res, next) => {
      const newTraining = req.body
      models.Training.create(newTraining)
        .then((training) => {
          res.json(training)

        })
        .catch((error) => next(error))
  })


module.exports = router
