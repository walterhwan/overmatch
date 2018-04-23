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