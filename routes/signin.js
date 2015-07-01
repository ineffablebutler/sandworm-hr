var express = require('express');
var app = express();
var passport = require('passport');
var signinRouter = express.Router();
signinRouter.post('/', passport.authenticate('local'), function (req, res) {
  res.send('success!');
});
module.exports = signinRouter;