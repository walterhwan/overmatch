let User = require('../model/users');
let assert = require('assert')
var bodyParser = require('body-parser');

exports.apiGET = function(req, res) {
  User.find({authCode: req.params.authCode}, function(err, user) {
    if (err) {
      res.send(err);
    }
    // //responds with a json object of our database users.
    //   res.json(user[0]);
    // }
    res.json(user[0]);
    // if (user[0]) {
    //   res.json(user[0]);
    // } else {
    //   res.send({message: 'Cannot find user'})
    // }
  });
};

exports.apiPOST = function(req, res) {
  var user = new User();
  //body parser lets us use the req.body
  // For now, only save username and level, might need to add more later

  // username validation, presence true
  if (req.body.battleTag === null || req.body.battleTag === undefined) {
    let erorr = user.validateSync();
    assert.equal(erorr.errors['battleTag'].message,
    'Missing battleTag');
  } else {
    user.battleTag = req.body.battleTag;
  }
  user.authCode = req.body.authCode;
  user.team_id = req.body.team_id;
  user.save(function(err) {

    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'User successfully added!'});
    }
  });
};

// updating a user
exports.apiPUT = function(req, res) {
  // User.findById(req.params.user_id, function(err, user) {
  User.find({"authCode": req.body.authCode}, function(err, user) {
    if (err) {
      console.log(err);
      res.send(err);
    }

    // TODO: user field that we would update, need to update this
    user.authCode = req.body.authCode;
    user.battleTag = req.body.battleTag;
    //save user
    // debugger
    user.save(function(err) {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'User has been updated' });
      }
    });
  });
};

//select the user by its ID, then removes it.
exports.apiDELETE = function(req, res) {
  User.remove({ _id: req.params.user_id }, function(err, user) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'User has been deleted' });
    }
  });
};
