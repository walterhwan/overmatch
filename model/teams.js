//model/teams.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var timeStamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an object that shows
//the shape of your database entries.
var PosSchema = new Schema({
  role: {type: String, "default": ""},
  heros: [String]
});

var TeamsSchema = new Schema({
  // positions: [{}],
  positions: [PosSchema],
  number_of_players: Number,
  team_name: String

});


TeamsSchema.plugin(timeStamps);

//export our module to use in server.js
module.exports = {
  team: mongoose.model('Team', TeamsSchema),
  pos: mongoose.model('Pos', PosSchema)
}
