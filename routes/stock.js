var express = require('express');
var Stock = require('../db/models/stock');
var stockRouter = express.Router();
stockRouter.post('/', function (req, res) {
  new Stock(req.body).save().then(function (newStock) {
    res.send(newStock);
  });
});
module.exports = stockRouter;