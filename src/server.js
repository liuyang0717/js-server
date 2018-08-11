var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

var router = require('./routes/router');
var logger = require('./logger');

var app = express();
var port = 3000;

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'Content-Type'); // X-Requested-With,
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Content-Type', 'application/json;charset=utf-8')
  next();
};

app.use(allowCrossDomain);
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger);
app.use(cookieParser());

app.use('/', router);

app.listen(port);
