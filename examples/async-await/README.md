
<h1 align="center">retryer.js examples</h1>

<p align="center">
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/basic/">basic</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/request/">request</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/mongoose/">mongoose</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/mongodb/">mongodb</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/redis/">redis</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/angular/">angular</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/react/">react</a> &bull;
  <b>async/await</b> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/advanced-options/">advanced-options</a>
</p>

<p align="center">
  <img src="https://github.com/ykrevnyi/reconnect/blob/docs/docs/retryer-v1.5.1.gif" alt="retryer.js intro"/>
</p>

In this `async-await` example we will take a look at async/await usage.

## Quick Start

### Given you have code:

```javascript
async function sendRequest() {
   await request('http://site.com/')
}

sendRequest()
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('error'))
```

### With `retryer` it looks like
```javascript
async function sendRequest() {
   await request('http://site.com/')
}

retry(sendRequest)
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('error'))
```
<h5 align="center">Full examples are: <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/async-await/index.js">async single</a> and <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/async-await/async-retry.js">async both</a>.</h5>

## Prefer diff?
```diff
async function sendRequest() {
   await request('http://site.com/')
}

-sendRequest()
+retry(sendRequest)
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('error'))
```

## Test it yourself
Clone GitHub repository.
```bash
git clone https://github.com/ykrevnyi/retryer.js
```

Open `basic` example.
```bash
cd retryer.js/examples/async-await
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
Please submit an issue on GitHub and provide information about your setup.
