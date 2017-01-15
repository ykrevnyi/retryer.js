
<h1 align="center">retryer.js examples</h1>

<p align="center">
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/basic/">basic</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/request/">request</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/mongoose/">mongoose</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/mongodb/">mongodb</a> &bull;
  <b>redis</b> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/angular/">angular</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/react/">react</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/async-await/">async/await</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/advanced-options/">advanced-options</a>
</p>

<p align="center">
  <img src="https://github.com/ykrevnyi/reconnect/blob/docs/docs/retryer-v1.5.1.gif" alt="retryer.js intro"/>
</p>

In this `redis` example we will reconnect to the `Redis` data store.

## Quick Start

### Given you have code:

```javascript
redis.connect('mongodb://localhost/test');
redis.connection.on('error', console.log('error'));
redis.connection.once('open', function() {
  console.log('Connected 🎉');
});

```

### With `retryer` it looks like
```javascript
// STEP 1: Promisify redis
redis.Promise = Promise;

// STEP 2: Create function that returns redis' promise
function redisConnect() {
  return redis.connect('mongodb://mongodb/test-db');
}

// STEP 3: Pass that function to the retry(FUNCTION_NAME)
retry(redisConnect)
  .then(data => console.log('Connected 🎉'))
  .catch(err => console.log('error'));
```
<h5 align="center">Full <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/redis/index.js">example here</a></h5>

## Prefer diff?
```diff
+redis.Promise = Promise;

-redis.connect('mongodb://mongodb/test-db');
+function redisConnect() {
+  return redis.connect('mongodb://mongodb/test-db');
+}
-redis.connection.on('error', console.log('error'));
-redis.connection.once('open', function() {
-  console.log('Connected 🎉');
-});

+retry(redisConnect)
+  .then(data => console.log('Connected 🎉'))
+  .catch(err => console.log('error'););
```

## Test it yourself
### Using `Docker`
Clone GitHub repository.
```bash
git clone https://github.com/ykrevnyi/retryer.js
```

Open `redis` example.
```bash
cd retryer.js/examples/redis
```

Build image.
```bash
docker-compose build redis-example
```

Start `redis` example.
```bash
docker-compose run --rm redis-example npm start
```

### Not Using `Docker`
Clone GitHub repository.
```bash
git clone https://github.com/ykrevnyi/retryer.js
```

Open `redis` example.
```bash
cd retryer.js/examples/redis
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

Start `redis` example.
```bash
npm start
```

## Need Help?
Please submit an issue on GitHub and provide information about your setup.
