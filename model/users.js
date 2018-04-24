//model/users.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var timeStamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an object that shows
//the shape of your database entries.
var UsersSchema = new Schema({
  username: {
    type: String,
    required: [true, "Missing username"]
  },
  level: Number,
  team_id: Number
});

UsersSchema.plugin(timeStamps);

//export our module to use in server.js
module.exports = mongoose.model('User', UsersSchema);
