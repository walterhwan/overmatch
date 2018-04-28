// express Router for users routes
var express = require('express');
var router = express.Router();
var users = require('../controller/users');

router.route('/users')
  .post(users.apiPOST);

//Adding a route to a specific team based on the database ID
router.route('/users/:authCode')
  .get(users.apiGET)
  .delete(users.apiDELETE);

router.route('/users/battleTag/:battleTag')
  .put(users.apiBattleTagPUT)
  .get(users.apiBattleTagGET)


module.exports = router;
