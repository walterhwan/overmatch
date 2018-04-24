let teamModel = require('../model/teams');
let Team = teamModel.team;
let Pos = teamModel.pos;
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

// for creating a team, required body to have role: string, and heros: string, and number_of_players: string
exports.apiPOST = function(req, res) {
  var team = new Team();
  var pos = new Pos();

  // Every time a team is created, we got the role and hero from the creator to fill in the first item in positions in post request, rest of 5 items in positions are dummy collections in Pos
  var dummyPos = [];
  for(let i = 0; i < 5; i++) {
    dummyPos = dummyPos.concat(new Pos());
  }

  pos.role = req.body.role;
  pos.heros = pos.heros.concat(req.body.heros);
  dummyPos.unshift(pos)
  team.positions = team.positions.concat(dummyPos);

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


// for updating a team, required body to have role: string, heros: string, and pos_index: integer, this is pretty much adding a new player to the team
exports.apiPUT = function(req, res) {
  Team.findById(req.params.team_id, function(err, team) {
    if (err) {
      res.send(err);
    }
    //look for the pos_index and update
    let pos_index = parseInt(req.body.pos_index);
    if (team.positions[pos_index].role === "") {
      team.positions[pos_index].role = req.body.role;
      team.positions[pos_index].heros = team.positions[pos_index].heros.concat(req.body.heros);
    }

    //save team
    team.save(function(err) {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'Team has been updated' });
      }
    });
  });
};

//select the team by its ID, then removes it.
exports.apiDELETE = function(req, res) {
  Team.remove({ _id: req.params.team_id }, function(err, team) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Team has been deleted' });
    }
  });
};