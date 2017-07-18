
<h1 align="center">How to retry promise</h1>

<p align="center">
  <b>basic</b> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/request/">request</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/mongoose/">mongoose</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/mongodb/">mongodb</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/redis/">redis</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/async-await/">async/await</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/bunyan/">bunyan</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/winston/">winston</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/advanced-options/">advanced options</a>
</p>

<p align="center">
  <img src="https://github.com/ykrevnyi/retryer.js/tree/master/docs/retryer-v1.5.1.gif" alt="retryer.js intro"/>
</p>

In this `basic` example we will take a look at the most simple request retry.

## Quick Start

### Given you have code:

```javascript
// Send request to the http://site.com/
request('http://site.com/')
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('Not connected 🤷‍'))
```

### With `retryer` it looks like
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
<h5 align="center">Full example is in <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/basic/index.js">index.js file</a></h5>

## Prefer diff?
```diff
+function sendRequest() {
+   return request('http://site.com/')
+}

-request('http://site.com/')
+retry(sendRequest)
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('Not connected 🤷‍'))
```

## Try it yourself
Clone GitHub repository.
```bash
git clone https://github.com/ykrevnyi/retryer.js
```

Open `basic` example.
```bash
cd retryer.js/examples/basic
```

Install dependencies.
```bash
npm install
```

Start `basic` example.
```bash
npm start
```

## A bit of explanation
In order to retry request - just wrap your `promise`(in our case its `request('http://site.com/')`) into function:

```javascript
/* STEP 1 */

// before
request('http://site.com/');

// after
function sendRequest() {
  return request('http://site.com/');
}
```

And then call it:
```javascript
/* STEP 2 */

// before
request('http://site.com/')
  .then(..)
  .catch(..)

// after
// Notice that we pass `sendRequest` without brackets `sendRequest()`
// ✅ (Correct) retry(sendRequest)
// ❌ (Wrong)   retry(sendRequest())
retry(sendRequest)
  .then(..)
  .catch(..)
```

Want to see `diff`?
```diff
+function sendRequest() {
+  return request('http://site.com/');
+}

-request('http://site.com/')
+retry(sendRequest)
  .then(..)
  .catch(..)
```

## Need Help?
Please [submit an issue](https://github.com/ykrevnyi/retryer.js/issues) on GitHub and provide information about your setup.
