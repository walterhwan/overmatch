let assert = require('assert')
var bodyParser = require('body-parser');

// for creating a team, required body to have role: string, and heros: string, and number_of_players: string
exports.apiPOST = function(req, res) {
  // req = JSON.parse(req)
  var request = require("request");
  var options = { method: 'POST',
    url: 'https://us.battle.net/oauth/token',
    headers:
     { 'postman-token': '319cd41d-3df2-922d-f6d7-d5b22a9ceccf',
       'cache-control': 'no-cache',
       authorization: 'Basic cXc3cmp6cHVzdWpmbnJmcjYyODJ6NXZqOHp4dHFncGI6Z1J4aGNGUVRITlpUODVLU2JSc3hWQTRnMktuandRVVc=',
       'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
    formData:
     { grant_type: 'authorization_code',
       code: req.body.authCode,
       redirect_uri: 'https://1a6dad92.ngrok.io' } };

  let accessToken;
  let battleTag;
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    accessToken = JSON.parse(body).access_token;

    var request2 = require("request");
    var options = { method: 'GET',
      url: 'https://us.api.battle.net/account/user',
      qs: { access_token: accessToken },
      headers:
       { 'Postman-Token': 'f3ed47ac-29c5-466e-9830-903e32f95894',
         'Cache-Control': 'no-cache' } };

    request2(options, function (error, response, body) {
      if (error) throw new Error(error);

      battleTag = JSON.parse(body).battletag
      res.json({message: battleTag})
    });
  });

};
