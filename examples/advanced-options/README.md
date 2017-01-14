
<h1 align="center">retryer.js examples</h1>

<p align="center">
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/basic">basic</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/hello-world">hello-world</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/request">request</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/mongoose">mongoose</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/mongodb">mongodb</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/redis">redis</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/angular">angular</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/react">react</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/async-await">async/await</a> &bull;
  <b>advanced-options</b>
</p>

<p align="center">
  <img src="https://github.com/ykrevnyi/reconnect/blob/docs/docs/retryer-options-v1.0.1.gif" alt="retryer.js options"/>
</p>

In the `advanced-options` examples we will configure all available options for `retryer`.

## Quick Start

### Given you have code:

```javascript
// Send request to the http://site.com/
request('http://site.com/')
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('error'))
```

### With custom options it looks like
```javascript
const options = {
  debug: true, // show debug information
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
  // Send request to the http://site.com/
  return request('http://site.com/')
}

retry(sendRequest, options})
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('error'))
```
<h5 align="center">Full example is in <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/basic/index.js">index.js file</a></h5>


## Available Options
**Option Name**|**Type**|**Default**|**Description**|**Example**
:-------------:|:------:|:---------:|:-------------:|:--------:|
`debug`|`Boolean`|`false`|Log debug information|<a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/advanced-options/options-debug.js">options-debug.js</a>
`total`|`Number`|`10`|Number of attempts to retry|<a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/advanced-options/options-total.js">options-total.js</a>
`timeout`|`Number`|`1000`|Backoff timeout (in ms)|<a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/advanced-options/options-timeout.js">options-timeout.js</a>
`_onStart`|`Function`|`function(attempt) {..}`|Is triggered on start for each attempt|<a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/advanced-options/options-on-start.js">options-on-start.js</a>
`_onError`|`Function`|`function(error, attempt) {..}`|Is triggered on error for each attempt|<a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/advanced-options/options-on-error.js">options-on-error.js</a>

### How to Pass Options

Pass an `options` as a `second` argument.

```javascript
// Syntax
retry(fn, OPTIONS);

// Example: retry request 3 times with 2.5s timeout
// const options = {
//   debug: false,
//   timeout: 2500,
//   total: 3,
//   function(attempt) {..},
//   function(err, attempt) {..}
// };
//
// retry(sendRequest, options);
```
<h5 align="center">Checkout full <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/advanced-options/index.js">example</a>.</h5>

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

## Need Help?
Please submit an issue on GitHub and provide information about your setup.
