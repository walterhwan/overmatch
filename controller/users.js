let User = require('../model/users');
let assert = require('assert')
var bodyParser = require('body-parser');

exports.apiBattleTagPUT = function(req, res) {
  const battleTag = req.params.battleTag.replace('-', '#');
  User.findOne({battleTag: battleTag}, function(err, user) {
    if (err) {
      res.send(err);
    }
    // res.json(user);


    user.authCode = req.body.authCode || user.authCode;
    user.battleTag = user.battleTag;
    user.team_id = req.body.team_id;
    // user.heros = user.heros.concat(req.body.heros);
    // console.log(req.body.team_id);
    // console.log(user);
    //save user
    user.save(function(err) {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'User has been updated' });
      }
    });
  });
}

exports.apiBattleTagGET = function(req, res) {
  const battleTag = req.params.battleTag.replace('-', '#');
  User.findOne({battleTag: battleTag}, function(err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
}

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

  let battleTag = req.body.battleTag;
  let authCode = req.body.authCode;
  // username validation, presence true
  if (battleTag === null || battleTag === undefined) {
    let erorr = user.validateSync();
    assert.equal(erorr.errors['battleTag'].message,
    'Missing battleTag');
  } else {
    user.battleTag = battleTag;
  }
  user.authCode = authCode;
  user.team_id = req.body.team_id;
  user.heros = user.heros.concat(req.body.heros);
  // User.find({battleTag: battleTag}, function(err, user2) {
  //   if (user2) {
  //     user2.authCode = authCode;
  //     user2.save();
  //   }
  // });

  user.save(function(err) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'User successfully added!'});
    }
  });
};

// updating a user
// exports.apiPUT = function(req, res) {
//   // User.findById(req.params.user_id, function(err, user) {
//   User.find({"battleTag": req.body.battleTag}, function(err, user) {
//     if (err) {
//       res.send(err);
//     }
//
//     // TODO: user field that we would update, need to update this
//     user.authCode = req.body.authCode || user.authCode;
//     user.battleTag = req.body.battleTag || user.battleTag;
//     user.team_id = req.body.team_id;
//     //save user
//     user.save(function(err) {
//       if (err) {
//         res.send(err);
//       } else {
//         res.json({ message: 'User has been updated' });
//       }
//     });
//   });
// };

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
