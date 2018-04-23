'use strict';

//first we import our dependencies...
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//and create our instances
var app = express();
var router = express.Router();

// let User = require('./model/users');
var userRouter = require("./route/users");
var teamRouter = require("./route/teams");

//set our port to either a predetermined port number if you have set it up, or 3001, in this case we use localhost:8080/api
var port = process.env.API_PORT || 8080;

// db config, we setup test db
var mongoDB = 'mongodb+srv://appacademy:hacker12@cluster0-gahbk.mongodb.net/overmatchDataBase';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//now  we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'OM API Initialized!!!'});
});

//Use our router configuration when we call /api
app.use('/api', router);  // /api
app.use('/api', userRouter);  // /api/users
app.use('/api', teamRouter);  // /api/teams

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
