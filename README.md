[Live Site](https://aa-overmatch.herokuapp.com/)

# OverMatch

OverMatch is a single-page app built on an Express.js/Node.js/MongoDB backend and React.js frontend (MERN stack) that can help you form your dream Overwatch team.

In Overwatch, there are many characters with different roles in following categories: tank, defense, offense, and support. The goal of the application is to help players form a team based on their stats, hero preferences, and desired team formation. Once a team is formed, players can decide if they would like to add each other's BattleTag (in-game unique identifier) and team up together in the actual game.

## Features

+ Secure login authentication through Blizzard OAuth.
+ Team creation or joining based on matchmaking parameters.
+ Overwatch API to retrieve relevant data points.

#### Battle.net OAuth 2.0 API
https://dev.battle.net/docs/read/oauth

![Live Demo](https://github.com/walterhwan/overmatch/blob/master/public/gif/login_blizzard.gif)

By using OAuth, Blizzard handles the authentication process and the app receives a unique authorization code representing the user's consent to share specific info with our app. This code is then used to exchange for an access token from Blizzard to gain access to allowed resources, like their in-game BattleTag that is used in Overwatch.

```js
// The following is for oauth
app.post('/api/oauth', function(req, res) {
  let authCode = req.body.authCode;
  var request = require("request");
  var options = { method: 'POST',
    url: 'https://us.battle.net/oauth/token',
    headers:
     { 'cache-control': 'no-cache',
       authorization: AUTH_LOGIN,
       'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
    formData:
     { grant_type: 'authorization_code',
       code: authCode,
       redirect_uri: CALLBACK_URL } };

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
       { 'Cache-Control': 'no-cache' } };

    request2(options, function (error, response, body) {
      if (error) throw new Error(error);

      battleTag = JSON.parse(body).battletag
      res.json({battleTag: battleTag})
    });
  });
});
```

#### Overwatch account data API

Using the extracted BattleTag ID from Blizzard's OAuth, the related data points are retrieved by the server and are all stored as a collection in our MongoDB database.

Here is an example of the API request:
```
get http://ow-api.herokuapp.com/profile/pc/us/Tars-11569
```
And its response:
```JSON
{
  "username": "Tars",
  "level": 835,
  "portrait": "https://d1u1mce87gyfbn.cloudfront.net/game/unlocks/0x0250000000001401.png",
  "games": {
      "quickplay": {
          "won": 2702
      },
      "competitive": {
          "won": 26,
          "lost": 37,
          "draw": 0,
          "played": 63
      }
  },
  "playtime": {
      "quickplay": "652 hours",
      "competitive": "12 hours"
  },
  "competitive": {
      "rank": 2833,
      "rank_img": "https://d1u1mce87gyfbn.cloudfront.net/game/rank-icons/season-2/rank-5.png"
  },
  "levelFrame": "https://d1u1mce87gyfbn.cloudfront.net/game/playerlevelrewards/0x0250000000000971_Border.png",
  "star": "https://d1u1mce87gyfbn.cloudfront.net/game/playerlevelrewards/0x0250000000000971_Rank.png"
}
```

#### Team Creation/Joining and Match Making

The match making algorithm of this app will work differently from that as the in-game's system. Instead of solely matching players based on their competitive rank, users of this website can customize their team and pick other players that can play specific heros or roles.

![alt text](https://github.com/walterhwan/overmatch/blob/master/public/images/join_team.png)

## Project Design

OverMatch was built on a timeframe of just under 10 days. With an ambitious end product in mind while being on said timeline, priority was placed on the OAuth functionality as the resulting BattleTag would be necessary for the rest of the app to fall into place functionally.

## Technologies

Part of the charge of developing this app was to build it on the MERN stack, utilizing this popular stack's many built-in functionalities to help do the leg work behind our functions and logics.  

On the backend, the use of MongoDB's NoSQL structure allows us to dynamically store objects into collections while Express.js's versatility enabled api server routes to be easily implemented.

On the frontend, React.js's ability to maintain components and their slices of state makes it an ideal choice. Its inherent structure makes for better future development as many component codes can be recycled.

For production deployment, Heroku was chosen for its out of the box features and support.

## Future features planned
+ websocket technology to add chat
+ further optimization of team match making algorithm
