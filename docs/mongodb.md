## Mongo db Useful reference
check all database
```js
show dbs
```

check current database
```js
db
```

switch database
```js
use <database_name>
```

remove database
```js
use <database_name>
db.dropDatabase()
```

check all collections (tables) in database
```js
show collections
```

check all objects (rows) in a collection (users table)
```js
db.users.find()
```

drop a collection (ex: users collection)
```js
db.users.drop()
```
