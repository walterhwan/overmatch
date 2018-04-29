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
var BNET_ID = process.env.BNET_ID;
var BNET_SECRET = process.env.BNET_SECRET;

// // db config, we setup test db
// var mongoDB = 'mongodb+srv://appacademy:hacker12@cluster0-gahbk.mongodb.net/overmatchDataBase';
// mongoose.connect(mongoDB);
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//
// // configure the API to use bodyParser and look for JSON data in the request body
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
//
// //To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//
//   //and remove cacheing so we get the most recent comments
//   res.setHeader('Cache-Control', 'no-cache');
//   next();
// });

//now  we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'OM API Initialized!!!'});
});

// //Use our router configuration when we call /api
// app.use('/api', router);  // /api
// app.use('/api', userRouter);  // /api/users
// app.use('/api', teamRouter);  // /api/teams
//
// // The following is for oauth, backend route /api/test for now
// app.post('/api/test', function(req, res) { // api/test
//   // console.log(req.body);
//   let authCode = req.body.authCode;
//   var request = require("request");
//   var options = { method: 'POST',
//     url: 'https://us.battle.net/oauth/token',
//     headers:
//      { 'postman-token': '319cd41d-3df2-922d-f6d7-d5b22a9ceccf',
//        'cache-control': 'no-cache',
//        authorization: 'Basic cXc3cmp6cHVzdWpmbnJmcjYyODJ6NXZqOHp4dHFncGI6Z1J4aGNGUVRITlpUODVLU2JSc3hWQTRnMktuandRVVc=',
//        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
//     formData:
//      { grant_type: 'authorization_code',
//        code: authCode,
//        redirect_uri: 'https://1a6dad92.ngrok.io/home' } };
//
//   let accessToken;
//   let battleTag;
//   request(options, function (error, response, body) {
//     if (error) throw new Error(error);
//     accessToken = JSON.parse(body).access_token;
//     // console.log("accessToken: " + accessToken);
//
//     var request2 = require("request");
//     var options = { method: 'GET',
//       url: 'https://us.api.battle.net/account/user',
//       qs: { access_token: accessToken },
//       headers:
//        { 'Postman-Token': 'f3ed47ac-29c5-466e-9830-903e32f95894',
//          'Cache-Control': 'no-cache' } };
//
//     request2(options, function (error, response, body) {
//       if (error) throw new Error(error);
//
//       battleTag = JSON.parse(body).battletag
//       res.json({battleTag: battleTag})
//       // console.log("BACKEND:");
//       console.log(body);
//     });
//   });
// });
//
// app.post('/api/testing/', function(req, res) {
//   var request = require("request");
//   let battleTag = req.body.battleTag.replace("#", "-");
//   // console.log(battleTag);
//   var options = { method: 'GET',
//     url: `https://ow-api.herokuapp.com/profile/pc/us/${battleTag}`,
//     headers:
//      { 'Postman-Token': '59b02040-8d2f-475e-a95f-a07b15a692c1',
//        'Cache-Control': 'no-cache' } };
//
//   request(options, function (error, response, body) {
//     if (error) throw new Error(error);
//     res.json(JSON.parse(body));
//   });
// });

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});

// oauth stuff
require('./services/passport');
require('./route/authRoutes')(app);
