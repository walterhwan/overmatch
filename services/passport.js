const passport = require('passport');
const BnetStrategy = require('passport-bnet').Strategy;
// const keys = require('../config/keys');
// const mongoose = require('mongoose');

var BNET_ID = process.env.BNET_ID;
var BNET_SECRET = process.env.BNET_SECRET;
var CALLBACK_URL = process.env.CALLBACK_URL;
// console.log(process.env);
// passport.serializeUser(function(user, done) {
//     done(null, user);
// });
//
// passport.deserializeUser(function(obj, done) {
//     done(null, obj);
// });

passport.use(
  new BnetStrategy({
      clientID: BNET_ID,
      clientSecret: BNET_SECRET,
      // callbackURL: "https://aa-overmatch.herokuapp.com/",
      // callbackURL: "https://1a6dad92.ngrok.io/home",
      callbackURL: CALLBACK_URL,
      region: "us",
    },
    (accessToken, refreshToken, profile, done) => {
      // debugger
      // console.log(accessToken);
      // console.log(refreshToken);
      // console.log(profile);
      process.nextTick(function () {
        return done(null, accessToken);
      });
    }
  )
);
