var express = require('express');
var Portfolio = require('../db/models/portfolio');
var portfoliosRouter = express.Router();
portfoliosRouter.get('/', function (req, res) {
  var id = req.user.id;
  new Portfolio().query('where', 'users_id', '=', id).fetchAll().then(function (portfolios) {
    res.send(portfolios);
  });
});
portfoliosRouter.post('/', function (req, res) {
  var name = req.body.name;
  var id = req.user.id;
  new Portfolio({
    'name': name,
    'users_id': id
  }).save().then(function (newPortfolio) {
    res.send(newPortfolio);
  });
});
module.exports = portfoliosRouter;