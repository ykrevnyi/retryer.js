
<h1 align="center">Retryer.js Bunyan Integration</h1>

<p align="center">
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/basic/">basic</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/request/">request</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/mongoose/">mongoose</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/mongodb/">mongodb</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/redis/">redis</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/async-await/">async/await</a> &bull;
  <b>bunyan</b> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/winston/">winston</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/advanced-options/">advanced options</a>
</p>

<p align="center">
  <img src="https://github.com/ykrevnyi/retryer.js/blob/master/assets/retryer-v1.5.1.gif" alt="retryer.js intro"/>
</p>

In this `bunyan` example we will integrate *bunyan* logger into *retryer.js*.

## Quick Start

### Given you have code:

```javascript
// STEP 1: create function that returns promise
function sendRequest() {
  return request('http://site.com/')
}

// STEP 2: Pass that function to the retry(FUNCTION_NAME)
retry(sendRequest)
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('Not connected 🤷‍'))
```

### With `bunyan & retryer` it looks like
```javascript
// STEP 1. Initialize logger
const logger = bunyan.createLogger({name: "mylogger"});

// STEP 2: create function that returns promise
function sendRequest() {
   return request('http://site.com/')
}

// STEP 3: Pass implement 'onStart' and/or 'onError' handlers
// 
// onStart(attempt)         - Is triggered on START for each attempt
// onError(error, attempt)  - Is triggered on ERROR for each attempt
var retryerConfig = {
  onStart: attempt => {
    logger.info(`Starting attempt ${attempt}`)
  },
  onError: (err, attempt) => {
    logger.info(`Attempt #${attempt} failed. Error ${err}`)
  }
}

// STEP 4: Don't forget to implement final handlers
retry(sendRequest, retryerConfig)
  .then(data => logger.info('Connected'))
  .catch(error => logger.error('Not connected 🤷‍'))

```
<h5 align="center">Full example is in <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/bunyan/index.js">index.js file</a><br>Cannot understand this example? Take a look at <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/basic/">basic one</a></h5>

## Prefer diff?
```diff
+ // STEP 1. Initialize logger
+ const logger = bunyan.createLogger({name: "mylogger"});

// STEP 2: create function that returns promise
function sendRequest() {
   return request('http://site.com/')
}

+ // STEP 3: Pass implement 'onStart' and/or 'onError' handlers
+ // 
+ // onStart(attempt)         - Is triggered on START for each attempt
+ // onError(error, attempt)  - Is triggered on ERROR for each attempt
+ var retryerConfig = {
+   onStart: attempt => {
+     logger.info(`Starting attempt ${attempt}`)
+   },
+   onError: (err, attempt) => {
+     logger.info(`Attempt #${attempt} failed. Error ${err}`)
+   }
+ }

+ // STEP 4: Don't forget to implement final handlers
+ retry(sendRequest, retryerConfig)
- retry(sendRequest)
+   .then(data => logger.info('Connected'))
+   .catch(error => logger.error('Not connected 🤷‍'))
-   .then(data => console.log('Connected'))
-   .catch(error => console.log('Not connected 🤷‍'))

```

## Try it yourself
Clone GitHub repository.
```bash
git clone https://github.com/ykrevnyi/retryer.js
```

Open `bunyan` example.
```bash
cd retryer.js/examples/bunyan
```

Install dependencies.
```bash
npm install
```

Start `bunyan` example.
```bash
npm start
```

## Need Help?
Please [submit an issue](https://github.com/ykrevnyi/retryer.js/issues) on GitHub and provide information about your setup.
