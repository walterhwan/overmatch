// express Router for teams routes
var express = require('express');
var router = express.Router();
var teams = require('../controller/teams');

router.route('/teams')
  .get(teams.apiGET)
  .post(teams.apiPOST);

module.exports = router;
