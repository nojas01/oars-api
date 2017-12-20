const cors = require('cors')
const bodyParser = require('body-parser')
const { trainings, users, ships, rowers } = require('./routes')
const models = require('./models')
const _ = require('lodash');
const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');

const jwtOptions = require('./config/jwt')
const JwtStrategy = passportJWT.Strategy;

const strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('payload received', jwt_payload);
  // usually this would be a database call:
  models.User.findById(jwt_payload.id).then(user => {
    if (user) {
      next(null, user);
    } else {
      next(null, false);
    }
  })
});

passport.use(strategy);

const PORT = process.env.PORT || 3030

models.sequelize.sync().then(function() { // from express example/bin/www
  let app = express()
    // it's not nessassary
    .use(cors())
    .use(passport.initialize())
    .use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())
    // Our routes

    .use(rowers)
    .use(ships)
    .use(trainings, users)

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
