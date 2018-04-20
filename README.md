# OverMatch

OverMatch is a single-page app that can help you form your dream Overwatch team.


## Background and Overview


## Technologies & Technical Challenges

Backend: MongoDB, Express.js, Node.js
Frontend: React, Redux, JavaScript

#### Battle.net OAuth 2.0 API
https://dev.battle.net/docs/read/oauth

By using OAuth, we can let Blizzard handle the authentication process and receive a unique ID representing that user, then use an access token to gain access to allowed resources like their Overwatch Battle tags, most frequently used Heros, and competitive rank.


Currently Overwatch team at Blizzard don't provide any official api to pull user data. But there are unofficial overwatch api like [OW API](https://github.com/Fuyukai/OWAPI)

Here is an example of such API request
```
get http://ow-api.herokuapp.com/profile/pc/us/Tars-11569
```
And its response
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
