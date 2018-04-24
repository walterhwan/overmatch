let Team = require('../model/teams');
let assert = require('assert')
var bodyParser = require('body-parser');

exports.apiGET = function(req, res) {
  Team.find(function(err, teams) {
    if (err) {
      res.send(err);
    }
    //responds with a json object of our database teams.
    res.json(teams);
  });
};

exports.apiPOST = function(req, res) {
  var team = new Team();
  //body parser lets us use the req.body
  // For now, only save teamname and level, might need to add more later

  // teamname validation, presence true
  team.position = req.body.position;
  let erorr = team.validateSync();
  assert.equal(erorr.errors['position'].message,
  'Missing position');

  // TODO: add necessary validation later
  team.number_of_players = req.body.number_of_players;
  // console.log(req.body);
  team.save(function(err) {


    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Team successfully added!'});
    }
  });
};
