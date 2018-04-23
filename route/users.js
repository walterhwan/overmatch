// express Router for users routes
var express = require('express');
var router = express.Router();
var users = require('../controller/users');

router.route('/users')
  .get(users.apiGET)
  .post(users.apiPOST);

module.exports = router;
