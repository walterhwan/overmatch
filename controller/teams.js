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

exports.apiPOST = function(req, res) {
  var team = new Team();
  var pos = new Pos();
  //body parser lets us use the req.body
  // For now, only save teamname and level, might need to add more later

  // Every time a team is created, we got the role and hero from the creator to fill in the first item in positions in post request, rest of 5 items in positions are dummy collections in Pos
  var dummyPos = [];
  for(let i = 0; i < 4; i++) {
    dummyPos = dummyPos.concat(new Pos());
  }

  pos.role = req.body.role;
  pos.heros = pos.heros.concat(req.body.heros);
  dummyPos.unshift(pos)
  team.positions = team.positions.concat(dummyPos);

  // legacy notes...don't bother to look at this
  // req.body.positions: {"role": "support", "heros": "mercy"}
  // team.positions: '{"role": "support", "heros": "mercy"}'
  // user JSON.parse to get { role: 'support', heros: 'mercy' }
  // team.positions = team.positions.concat(pos);
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


//The put method gives us the chance to update our team based on the ID passed to the route
exports.apiPUT = function(req, res) {
 Team.findById(req.params.team_id, function(err, team) {
   if (err) {
     res.send(err);
   }
   //Updating Pos item in positions

   (req.body.author) ? team.author = req.body.author : null;
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
