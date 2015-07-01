var express = require('express');
var Stock = require('../db/models/stock');
var stocksRouter = express.Router();
stocksRouter.post('/', function (req, res) {
  var id = req.body.id;
  new Stock().query('where', 'portfolios_id', '=', id).fetchAll().then(function (stocks) {
    res.send(stocks);
  });
});
module.exports = stocksRouter;