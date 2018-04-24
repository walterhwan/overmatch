//model/teams.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var timeStamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an object that shows
//the shape of your database entries.

var TeamsSchema = new Schema({
  positions: [{}],
  // positions: [Schema.Types.Mixed],
  number_of_players: Number,

});


TeamsSchema.plugin(timeStamps);

//export our module to use in server.js
module.exports = mongoose.model('Team', TeamsSchema);
