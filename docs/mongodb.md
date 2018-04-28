## Mongo db Useful reference
#### check all database
```js
show dbs
```

#### check current database
```js
db
```

#### switch database
```js
use <database_name>
```

#### remove database
```js
use <database_name>
db.dropDatabase()
```

#### check all collections (tables) in database
```js
show collections
```

#### check all objects (rows) in a collection (users table)
```js
db.users.find()
```

#### drop a collection (ex: users collection)
```js
db.users.drop()
```

#### Get created time for object using ObjectId
```js
ObjectId("5ade1be4e44461f6c805ca11").getTimestamp()
ISODate("2018-04-23T17:46:12Z")
```

#### Remove an item with id query from the collection (in this example: teams)
```js
db.teams.remove({"_id" : ObjectId("5adec27f785ff205a3e34b65")})
```

#### Print prettier collection (ex: teams collection)
```js
db.teams.find().pretty()
```
