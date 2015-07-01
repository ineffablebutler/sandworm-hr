/*
 ** auth.js
 ** Used with Passport.js
 */
var express = require('express');
var passport = require('passport');
var bcrypt = require('bcrypt-nodejs');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../db/models/user');
var authRouter = express.Router();
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (obj, done) {
  done(null, obj);
});
passport.use(new LocalStrategy(function (username, password, done) {
  new User({
    username: username
  }).fetch().then(function (found) {
    if (found) {
      bcrypt.compare(password, found.get('password'), function (error, result) {
        if (result) {
          return done(null, found);
        }
        return done(null, false, {
          message: 'incorrect password'
        });
      });
    } else {
      return done(null, false, {
        message: 'incorrect username'
      });
    }
  });
}));
var ensureAuthenticated = function (req, res) {
  if (req.isAuthenticated()) {
    res.status(202).send(req.user.username);
  } else {
    res.status(401).send('please sign in');
  }
};
authRouter.get('/', ensureAuthenticated);
module.exports = authRouter;