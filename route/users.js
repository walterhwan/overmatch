// express Router for users routes
var express = require('express');
var router = express.Router();
var users = require('../controller/users');

router.route('/users')
  .get(users.apiGET)
  .post(users.apiPOST);

//Adding a route to a specific team based on the database ID
router.route('/users')
  .put(users.apiPUT)
  .delete(users.apiDELETE);

module.exports = router;
