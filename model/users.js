//model/users.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an object that shows
//the shape of your database entries.
var UsersSchema = new Schema({
  username: String,
  level: Number,
  portrait: String,
  games: {
    quickplay: {
      won: Number
    },
    competitive: {
      won: Number,
      lost: Number,
      draw: Number,
      played: Number
    }
  }, // obj
  playtime: {
    quickplay: String,
    competitive: String
  }, // obj
  competitive: {
    rank: Number,
    rank_img: String
  }, // obj
  levelFrame: String,
  star: String
});

//export our module to use in server.js
module.exports = mongoose.model('User', UsersSchema);
