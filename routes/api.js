var express = require('express');
var handler = require('../request-handler.js');
var apiRouter = express.Router();
apiRouter.use('/stocks', handler.getStocks);
module.exports = apiRouter;