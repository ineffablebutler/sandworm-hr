var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var handler = require('./request-handler.js');
var session = require('express-session');
var bcrypt = require('bcrypt-nodejs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var db = require('./db/config');
var Users = require('./db/collections/users');
var User = require('./db/models/user');
var Stocks = require('./db/collections/stocks');
var Stock = require('./db/models/stock');
var Portfolio = require('./db/models/portfolio');
var signoutRouter = require('./routes/signout');
var signinRouter = require('./routes/signin');
var signupRouter = require('./routes/signup');
var authRouter = require('./routes/auth');
var portfoliosRouter = require('./routes/portfolios');
var stockRouter = require('./routes/stock');
var stocksRouter = require('./routes/stocks');
var apiRouter = require('./routes/api');
var autoRouter = require('./routes/auto')
var app = express();
app.use(session({
  secret: 'SPLEWT',
  resave: true,
  saveUninitialized: true
}));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
app.use(passport.initialize());
app.use(passport.session());
app.use('/signout', signoutRouter);
app.use('/signin', signinRouter);
app.use('/signup', signupRouter);
app.use('/auth', authRouter);
app.use('/portfolios', portfoliosRouter);
app.use('/stock', stockRouter);
app.use('/stocks', stocksRouter);
app.use('/api', apiRouter);
app.use('/auto', autoRouter);
var port = process.env.PORT || 8080;
app.listen(port);
console.log('Listening to: ' + port);