let User = require('../model/users');
var bodyParser = require('body-parser');

exports.apiGET = function(req, res) {
  User.find(function(err, users) {
    if (err) {
      res.send(err);
    }
    //responds with a json object of our database users.
    res.json(users);
  });
};

exports.apiPOST = function(req, res) {
  var user = new User();
  //body parser lets us use the req.body
  // For now, only save username and level, might need to add more later
  user.username = req.body.username;
  user.team_id = req.body.team_id;
  user.level = req.body.level;
  // console.log(req.body);
  user.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'User successfully added!'});
  });
};
