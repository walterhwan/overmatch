let Team = require('../model/teams');
let assert = require('assert')
var bodyParser = require('body-parser');

exports.apiGET = function(req, res) {
  Team.find(function(err, teams) {
    if (err) {
      res.send(err);
    } else {
      //responds with a json object of our database teams.
      res.json(teams);
    }
  });
};

exports.apiPOST = function(req, res) {
  var team = new Team();
  //body parser lets us use the req.body
  // For now, only save teamname and level, might need to add more later

  // req.body.positions: {"role": "support", "heros": "mercy"}
  // team.positions: '{"role": "support", "heros": "mercy"}'
  // user JSON.parse to get { role: 'support', heros: 'mercy' }
  team.positions.push(req.body.positions);
  // console.log(req.body);
  // console.log(JSON.parse(team.positions));

  // TODO: add necessary validation later
  team.number_of_players = req.body.number_of_players;

  team.save(function(err) {

    if (err) {
      res.send(err);
    } else {
      console.log(err);
      res.json({ message: 'Team successfully added!'});
    }
  });
};
