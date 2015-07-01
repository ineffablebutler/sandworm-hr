var express = require('express');
var passport = require('passport');
var User = require('../db/models/user');
var signupRouter = express.Router();
signupRouter.post('/', function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  new User({
    username: username
  }).fetch().then(function (found) {
    if (found) {
      res.status(400).send('username exists');
    } else {
      var user = new User({
        username: username,
        password: password
      });
      user.save().then(function (newUser) {
        passport.authenticate('local')(req, res, function () {
          res.send(newUser);
        });
      });
    }
  });
});
module.exports = signupRouter;