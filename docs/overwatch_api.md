### Overwatch ScrapAPI
https://github.com/ruohki/overwatchscrapapi

### How to set env variables and run server on localhost:3000
```bash
env BNET_ID=$Client_id BNET_SECRET=$Client_id npm run start-dev
```

### Process of getting battle tag
https://dev.battle.net/io-docs

Provide Client_id and Client_secret to battle.net
=> get authorization code
Provide Authorization code
=> get access token
=> get user battle tag

https://us.api.battle.net/account/user?access_token=9k48uqsku34n7kpgpknzrch6
