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

By using OAuth, Blizzard handles the authentication process and the app receives a unique authorization code representing the user's consent to share specific info with our app. This code is then used to exchange for an access token from Blizzard to gain access to allowed resources, like their in-game BattleTag used in Overwatch.

#### Overwatch account data API

Currently, Blizzard's Overwatch team does provide an API to pull hero-related data(like most frequently used and competitive rank), but they are undocumented. However, there are unofficial Overwatch API like [OW API](https://github.com/Fuyukai/OWAPI) that will provide the needed data.

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

The match making algorithm of this app will work differently from that as the in-game's system. Instead of solely matching players based on their competitive rank, users of this website can customize their team and pick other players that can play specific heros or roles.

## MVP
1. Blizzard OAuth, getting the user data
2. Team matchmaking
3. Display battle tag
4. Create Production README
5. Host multiple apps on Heroku for tunneling different port

## WIREFRAMES
#### Splash
![Login Page ](https://github.com/walterhwan/overmatch/blob/master/wireframes/splash.png)

#### Home page
![Home page](https://github.com/walterhwan/overmatch/blob/master/wireframes/OM-Homepage.png)

#### Team page
![Home page](https://github.com/walterhwan/overmatch/blob/master/wireframes/overmatch_team_form.png)

<!-- TODO: Add a Privacy Policy Page as described in https://dev.battle.net/policy -->

## Will Accomplish over the Weekend
+ Learn MERN stack (everyone)
+ Research Websocket (TBD)
+ Research Blizzard OAuth API (TBD)
+ Complete MongoDB tutorial and create schema (TBD)

## Group Members &  Work Breakdown
**Hsuanchen Wan**, **Danny Peng**, **Yu-Jen Chang**

#### Day 1
+ Parse documentation and tutorials for MERN stack
  + MongoDB (Danny)
  + Express (Danny)
  + Node (Yu-Jen)
+ Begin setting up respective parts of the stack (Hsuanchen)
+ Design overall layout (Yu-Jen)

#### Day 2
+ Begin implementation of Blizzard Auth (Danny)
+ Start building container/forms/component of the home page (Hsuanchen)
+ Make sure backend routing and api requesting works (Yu-Jen)

#### Day 3
+ Rendering font end pages including team matching form (Yu-Jen)
+ Start working on websocket for live messaging system (Danny)
+ Implementing matchmaking algorithm (Hsuanchen)

#### Day 4
+ Seed data (Yu-Jen)
+ Implement Overwatch account data api (Danny)
+ Fully testing out the functionality of team matching (Hsuanchen)

#### Day 5
+ Continue testing (Yu-Jen)
+ Finish CSS styling layout (Danny, Hsuanchen)

#### Day 6
+ Push to Heroku (Hsuanchen)
+ Create README (Yu-Jen)
+ Improve styling if needed (last minute todos...) (Yu-Jen)
