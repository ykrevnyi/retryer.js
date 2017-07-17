
<h1 align="center">Retryer.js Winston Integration</h1>

<p align="center">
  <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/basic/">basic</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/request/">request</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/mongoose/">mongoose</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/mongodb/">mongodb</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/redis/">redis</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/async-await/">async/await</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/bunyan/">bunyan</a> &bull;
  <b>winston</b> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/advanced-options/">advanced options</a>
</p>

<p align="center">
  <img src="https://github.com/ykrevnyi/reconnect/tree/master/docs/retryer-v1.5.1.gif" alt="retryer.js intro"/>
</p>

In this `winston` example we will integrate *winston* logger into *retryer.js*.

## Quick Start

### Given you have code:

```javascript
// Send request to the http://site.com/
request('http://site.com/')
  .then(data => console.log('Connected'))
  .catch(error => console.log('Not connected ¯\_(ツ)_/¯'))
```

### With `winston & retryer` it looks like
```javascript
import winston from 'winston';

// ...configure Winston however you like...

// STEP 1: create function that returns promise
function sendRequest() {
  return request('http://site.com/')
}

// STEP 2: Pass that function to the retry(FUNCTION_NAME)
retry(sendRequest)
  .then(data => winston.log('Connected 🎉'))
  .catch(error => winston.error('Not connected ¯\_(ツ)_/¯'))
```
<h5 align="center">Full example is in <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/winston/index.js">index.js file</a></h5>
<h5 align="center">Cannot understand this example? Take a look at <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/basic/index.js">basic one</a></h5>

## Prefer diff?
```diff
+ import winston from 'winston';

// STEP 1: create function that returns promise
function sendRequest() {
  return request('http://site.com/')
}

// STEP 2: Pass that function to the retry(FUNCTION_NAME)
retry(sendRequest)
-  .then(data => winston.log('Connected 🎉'))
-  .catch(error => winston.error('Not connected ¯\_(ツ)_/¯'))
+  .then(data => console.log('Connected 🎉'))
+  .catch(error => console.log('error'))
```

## Test it yourself
Clone GitHub repository.
```bash
git clone https://github.com/ykrevnyi/retryer.js
```

Open `winston` example.
```bash
cd retryer.js/examples/winston
```

Install dependencies.
```bash
npm install
```

Start `winston` example.
```bash
npm start
```

## Need Help?
Please submit an issue on GitHub and provide information about your setup.
