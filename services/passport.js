const passport = require('passport');
const BnetStrategy = require('passport-bnet').Strategy;

var BNET_ID = process.env.BNET_ID;
var BNET_SECRET = process.env.BNET_SECRET;
var CALLBACK_URL = process.env.CALLBACK_URL;


passport.use(
  new BnetStrategy({
      clientID: BNET_ID,
      clientSecret: BNET_SECRET,
      callbackURL: CALLBACK_URL,
      region: "us",
    },
    (accessToken, refreshToken, profile, done) => {
      process.nextTick(function () {
        return done(null, accessToken);
      });
    }
  )
);
