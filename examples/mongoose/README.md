
<h1 align="center">retryer.js examples</h1>

<p align="center">
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/basic/">basic</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/request/">request</a> &bull;
  <b>mongoose</b> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/mongodb/">mongodb</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/redis/">redis</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/async-await/">async/await</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/advanced-options/">advanced-options</a>
</p>

<p align="center">
  <img src="https://github.com/ykrevnyi/reconnect/blob/docs/docs/retryer-v1.5.1.gif" alt="retryer.js intro"/>
</p>

In this `mongoose` example we will reconnect to the `mongodb` using `mongoose` library.

## Quick Start

### Given you have code:

```javascript
mongoose.connect('mongodb://localhost/test');
mongoose.connection.on('error', console.log('error'));
mongoose.connection.once('open', function() {
  console.log('Connected 🎉');
});

```

### With `retryer` it looks like
```javascript
// STEP 1: Promisify mongoose
mongoose.Promise = Promise;

// STEP 2: Create function that returns mongoose' promise
function mongooseConnect() {
  return mongoose.connect('mongodb://mongodb/test-db');
}

// STEP 3: Pass that function to the retry(FUNCTION_NAME)
retry(mongooseConnect)
  .then(data => console.log('Connected 🎉'))
  .catch(err => console.log('error'));
```
<h5 align="center">Full <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/mongoose/index.js">example here</a></h5>

## Prefer diff?
```diff
+mongoose.Promise = Promise;

-mongoose.connect('mongodb://mongodb/test-db');
+function mongooseConnect() {
+  return mongoose.connect('mongodb://mongodb/test-db');
+}
-mongoose.connection.on('error', console.log('error'));
-mongoose.connection.once('open', function() {
-  console.log('Connected 🎉');
-});

+retry(mongooseConnect)
+  .then(data => console.log('Connected 🎉'))
+  .catch(err => console.log('error'););
```

## Test it yourself
### Using `Docker`
Clone GitHub repository.
```bash
git clone https://github.com/ykrevnyi/retryer.js
```

Open `mongoose` example.
```bash
cd retryer.js/examples/mongoose
```

Build image.
```bash
docker-compose build mongoose-example
```

Start `mongoose` example.
```bash
docker-compose run --rm mongoose-example npm start
```

### Not Using `Docker`
Clone GitHub repository.
```bash
git clone https://github.com/ykrevnyi/retryer.js
```

Open `mongoose` example.
```bash
cd retryer.js/examples/mongoose
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

Start `mongoose` example.
```bash
npm start
```

## Need Help?
Please submit an issue on GitHub and provide information about your setup.
