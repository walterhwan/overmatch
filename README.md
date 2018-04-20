# OverMatch

OverMatch is a single-page app that can help you form your dream Overwatch team.


## Background and Overview

In Overwatch, there are many characters with different roles in following categories: tank, defense, offense, and support. We are trying to build an application that helps players form a team with each other based on their stats, heroes preference, and desired team formation. Once the team is formed, players can decide if they would like to add contacts and team up together in Overwatch.

## Technologies & Technical Challenges

Backend: MongoDB, Express.js, Node.js
Frontend: React, Redux, JavaScript
Messaging share system: Websocket

#### Battle.net OAuth 2.0 API
https://dev.battle.net/docs/read/oauth

By using OAuth, we can let Blizzard handle the authentication process and receive a unique ID representing that user, then use an access token to gain access to allowed resources like their Overwatch Battle tags.

#### Overwatch account data API

Currently Overwatch team at Blizzard does provide API to pull overwatch hero data(like most frequently used Heros, and competitive rank), but they are undocumented. But there are unofficial overwatch api like [OW API](https://github.com/Fuyukai/OWAPI) we can use.

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

#### Match making

The match making rule of this app is not the same as the in-game match making system. Instead of solely matching player based on their competitive rank. Users of this website can customize their team, picking other users that can play specific heros or role(Offense, Defense, Support, or Tank). Other users who care less about team composition can select a list of Heros they like to play and be match into a team.
