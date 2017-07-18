
<h1 align="center">Advanced retryer.js configuration</h1>

<p align="center">
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/basic/">basic</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/request/">request</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/mongoose/">mongoose</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/mongodb/">mongodb</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/redis/">redis</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/async-await/">async/await</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/bunyan/">bunyan</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/winston/">winston</a> &bull;
  <b>advanced options</b>
</p>

<p align="center">
  <img src="https://github.com/ykrevnyi/retryer.js/tree/master/docs/retryer-options-v1.0.1.gif" alt="retryer.js options"/>
</p>

In the `advanced-options` examples we will configure all available options for `retryer`.

## Quick Start

### Given you have code:

```javascript
function sendRequest() {
  return request('http://site.com/')
}

retry(sendRequest, options})
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('Not connected 🤷‍'))
```

### With custom options it looks like
```javascript
const options = {
  total: 5, // retry 5 times
  timeout: 2000, // wait 2sec between retries
  onStart: attempt => {
    console.log(`Starting #${attempt} attempt`);
  },
  onError: (err, attempt) => {
    console.log(`Attempt #${attempt} failed. Error ${err}`);
  }
}

function sendRequest() {
  return request('http://site.com/')
}

retry(sendRequest, options})
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('Not connected 🤷‍'))
```
<h5 align="center">Full example is in <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/advanced-options/index.js">index.js file</a></h5>

## Prefer diff?
```diff
+const options = {
+  total: 5, // retry 5 times
+  timeout: 2000, // wait 2sec between retries
+  onStart: attempt => {
+    console.log(`Starting #${attempt} attempt`);
+  },
+  onError: (err, attempt) => {
+    console.log(`Attempt #${attempt} failed. Error ${err}`);
+  }
+}

function sendRequest() {
  return request('http://site.com/')
}

-retry(sendRequest)
+retry(sendRequest, options)
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('Not connected 🤷‍'))
```


## Available Options
**Option Name**|**Type**|**Default**|**Description**|**Example**
:-------------:|:------:|:---------:|:-------------:|:--------:|
`total`|`Number`|`10`|Number of attempts to retry|<a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/advanced-options/options-total.js">options-total.js</a>
`timeout`|`Number`|`1000`|Backoff timeout (in ms)|<a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/advanced-options/options-timeout.js">options-timeout.js</a>
`onStart`|`Function`|`function(attempt) {..}`|Is triggered on start for each attempt|<a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/advanced-options/options-on-start.js">options-on-start.js</a>
`onError`|`Function`|`function(error, attempt) {..}`|Is triggered on error for each attempt|<a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/advanced-options/options-on-error.js">options-on-error.js</a>

### How to Pass Options

Pass an `options` as a `second` argument.

```javascript
// Syntax
retry(fn, OPTIONS);

// Example: retry request 3 times with 2.5s timeout
// const options = {
//   timeout: 2500,
//   total: 3,
//   function(attempt) {..},
//   function(err, attempt) {..}
// };
//
// retry(sendRequest, options);
```
<h5 align="center">Checkout full <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/advanced-options/index.js">example</a>.</h5>

## Custom log messages

### Set `onStart` handler
This function will be triggered on start for each attempt.

If your app has `10 attempts` => then `onStart` will be called `10 times`.

```javascript
const options = {
  onStart: attempt => {
    console.log(`Starting #${attempt} attempt`);
  }
};

retry(sendRequest, options)
  .then(..)
  .catch(..)
```

### Set `onError` handler
This function will be triggered on error for each attempt.

If your app has `10 attempts` and `5 of them failed` => then `onError` will be called `5 times`.

```javascript
const options = {
  onError: (err, attempt) => {
    console.log(`📛 Something went wrong. Error ${err}`);
  }
};

retry(sendRequest, options)
  .then(..)
  .catch(..)
```

## Try it yourself
Clone GitHub repository.
```bash
git clone https://github.com/ykrevnyi/retryer.js
```

Open `advanced options` example.
```bash
cd retryer.js/examples/advanced-options
```

Install dependencies.
```bash
npm install
```

Start `advanced options` example.
```bash
npm start
```

## Need Help?
Please [submit an issue](https://github.com/ykrevnyi/retryer.js/issues) on GitHub and provide information about your setup.
