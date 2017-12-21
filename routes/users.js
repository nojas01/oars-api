const models = require('../models');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const jwtOptions = require('../config/jwt')
const bcrypt = require('bcrypt');

router.post("/login", function(req, res) {
  // Function to check if the user exists, or
  // if its a new user coming from the tablet (in which case it will create a new user)
  models.User.findOne({ where: {username: req.body.username} }).then(user => {
    if( !user && req.body.token === 'tablet' ){
      const newUserName = req.body.username
      const newUserPassword = req.body.password
      const hashedUserPassword = bcrypt.hashSync(newUserPassword, 10)

      models.User.create({username: newUserName, password: hashedUserPassword})
        .then((users) => res.json({message:"user created"}))

        .catch((error) => next(error))
    }

    else if( !user ) {
        res.status(401).json({message:"no such user found"});
    }

    if(bcrypt.compareSync(req.body.password, user.password)) {
      // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
      var payload = {id: user.dataValues.id};
      var token = jwt.sign(payload, jwtOptions.secretOrKey);
      res.json({message: "ok", token: token});
    } else {
      res.status(401).json({message:"passwords did not match"});
    }
  })
});

module.exports = router;
