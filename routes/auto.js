var express = require('express');
var request = require('request');
var autoRouter = express.Router();

autoRouter.get('/', function (req, res) {
  var query = req.query.data;
  var url = "http://autoc.finance.yahoo.com/autoc?query=" + query + "&callback=YAHOO.Finance.SymbolSuggest.ssCallback";
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});

module.exports = autoRouter;