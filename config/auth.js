const passport = require('passport');
const passportJWT = require('passport-jwt');
const models = require('../models')
const jwtOptions = require('./jwt')
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

module.exports = passport
