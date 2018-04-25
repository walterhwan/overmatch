const passport = require('passport');
const BnetStrategy = require('passport-bnet').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('User');

// passport.serializeUser(function(user, done) {
//     done(null, user);
// });
//
// passport.deserializeUser(function(obj, done) {
//     done(null, obj);
// });

passport.use(
  new BnetStrategy({
      clientID: keys.clientID,
      clientSecret: keys.clientSecret,
      callbackURL: "https://aa-overmatch.herokuapp.com/",
      region: "us",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
      // process.nextTick(function () {
      //   return done(null, profile);
      // });
    }
  )
);
