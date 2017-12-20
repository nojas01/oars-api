const cors = require('cors')
const bodyParser = require('body-parser')
const { trainings, ships, rowers } = require('./routes')
const models = require('./models')
const express = require('express');

const PORT = process.env.PORT || 3030

models.sequelize.sync().then(function() { // from express example/bin/www
  const app = express()
    // it's not nessassary
    .use(cors())
    .use(bodyParser.urlencoded({
      extended: true
    }))
    .use(bodyParser.json())
    // Our routes
    .use(trainings)
    .use(rowers)
    .use(ships)
    // catch 404 and forward to error handler, actuall error
    .use((req, res, next) => {
      const err = new Error('Not Found')
      err.status = 404
      next(err)
    })
    // final error handler
    .use((err, req, res, next) => {
      res.status(err.status || 500)
      res.send({ //send an object
        //only print full errors in development
        message: err.message,
        error: err
      })
    })
    .listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`)
    })
});
