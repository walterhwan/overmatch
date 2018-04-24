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
  for(let i = 0; i < 4; i++) {
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


// for updating a team, required body to have role: string, and heros: string, this is pretty much adding a new player to the team
exports.apiPUT = function(req, res) {
 Team.findById(req.params.team_id, function(err, team) {
   if (err) {
     res.send(err);
   }
   //look for the first empty item and update
   for(let i = 0; i < 5; i++) {
     if (team.positions[i].role === "") {
       team.positions[i].role = req.body.role;
       team.positions[i].heros = team.positions[i].heros.concat(req.body.heros);
       break;
     }
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
