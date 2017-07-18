
<h1 align="center">How to reconnect to MongoDB</h1>

<p align="center">
  <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/basic/">basic</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/request/">request</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/mongoose/">mongoose</a> &bull;
  <b>mongodb</b> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/redis/">redis</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/async-await/">async/await</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/bunyan/">bunyan</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/winston/">winston</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/advanced-options/">advanced options</a>
</p>

<p align="center">
  <img src="https://github.com/ykrevnyi/reconnect/tree/master/docs/retryer-v1.5.1.gif" alt="retryer.js intro"/>
</p>

In this `mongodb` example we will reconnect to the `MongoDB`.

## Quick Start

### Given you have code:

```javascript
MongoClient.connect('mongodb://mongodb/test-db', handler);

function handler(err, db) {
  if (err) {
    return console.log('error');
  }

  console.log('Connected 🎉');
}
```

### With `retryer` it looks like
```javascript
// STEP 1: Promisify mongodb
const connect = Promise.promisify(MongoClient.connect);

// STEP 2: Create function that returns mongodb' promise
function mongodbConnect() {
  return connect('mongodb://mongodb/test-db');
}

// STEP 3: Pass that function to the retry(FUNCTION_NAME)
retry(mongodbConnect)
  .then(data => console.log('Connected 🎉'))
  .catch(err => console.log('Not connected 🤷‍'))
```
<h5 align="center">Full <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/mongodb/index.js">example here</a></h5>

## Prefer diff?
```diff
+const connect = Promise.promisify(MongoClient.connect);

-MongoClient.connect('mongodb://mongodb/test-db', handler);
+function mongodbConnect() {
+  return connect('mongodb://mongodb/test-db');
+}

-function handler(err, db) {
-  if (err) {
-    return console.log('error');
-  }
-
-  console.log('Connected 🎉');
-}

+retry(mongodbConnect)
+  .then(data => console.log('Connected 🎉'))
+  .catch(err => console.log('Not connected 🤷‍'))
```

## Try it yourself
### Using `Docker`
Clone GitHub repository.
```bash
git clone https://github.com/ykrevnyi/retryer.js
```

Open `mongodb` example.
```bash
cd retryer.js/examples/mongodb
```

Build image.
```bash
docker-compose build mongodb-example
```

Start `mongodb` example.
```bash
docker-compose run --rm mongodb-example npm start
```

### Not Using `Docker`
Clone GitHub repository.
```bash
git clone https://github.com/ykrevnyi/retryer.js
```

Open `mongodb` example.
```bash
cd retryer.js/examples/mongodb
```

Make sure mongodb is running.
```bash
mongod
# or
service mongod status
```

Install dependencies.
```bash
npm install
```

Start `mongodb` example.
```bash
npm start
```

## Need Help?
Please [submit an issue](https://github.com/ykrevnyi/retryer.js/issues) on GitHub and provide information about your setup.
