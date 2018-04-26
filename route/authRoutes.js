const passport = require('passport');
const util = require('util');
const cookieParser = require('cookie-parser');
const session = require('express-session');

module.exports = (app) => {
  app.get(
    '/auth/bnet',
    passport.authenticate('bnet'),
    function(req, res) {
      // console.log(res);
    }
  );

  // app.get(
  //   '/auth/bnet/callback',
  //   // passport.authenticate('bnet')
  //   passport.authenticate('bnet', { failureRedirect: '/' }),
  //   function(req, res){
  //
  //   }
  // );


  // console.log(passport_res);
  // app.get('/', function(req, res) {
  //   if(req.isAuthenticated()) {
  //     var output = '<p>Login Using Your Battle.net Tag<p>' + req.user.id + '<br>';
  //     if(req.user.battletag) {
  //       output += req.user.battletag + '<br>';
  //     }
  //     output += '<a href="/logout">Logout</a>';
  //     res.send(output);
  //   } else {
  //     res.send('<h3>Please sign in first.</h3>' +
  //     '<a href="/auth/bnet">Login with Bnet</a>');
  //   }
  // });
  //
  // app.get('/logout', function(req, res) {
  //   req.logout();
  //   res.redirect('/');
  // });
  //
  // app.use(cookieParser());
  //
  // app.use(session({
  //   secret: 'blizzard',
  //   saveUninitialized: true,
  //   resave: true })
  // );
  //
  // app.use(passport.initialize());
  // app.use(passport.session());
};
