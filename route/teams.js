// express Router for teams routes
var express = require('express');
var router = express.Router();
var teams = require('../controller/teams');

router.route('/teams')
  .get(teams.apiGET)
  .post(teams.apiPOST);

//Adding a route to a specific team based on the database ID
router.route('/teams/:team_id')
  .put(teams.apiPUT)
  .delete(teams.apiDELETE);

module.exports = router;
