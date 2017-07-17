
[![Build Status](https://travis-ci.org/ykrevnyi/retryer.js.svg?branch=master)](https://travis-ci.org/ykrevnyi/retryer.js)
[![npm](https://img.shields.io/npm/dt/retryer.svg)](https://www.npmjs.com/package/retryer)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://github.com/ykrevnyi/retryer.js/blob/master/LICENSE)


# retryer.js

`retryer` is a tiny, battle tested library that enables you to retry promises.

<p align="center">
  <img src="https://github.com/ykrevnyi/retryer.js/blob/master/docs/assets/retryer-v1.5.1.gif" alt="retryer.js intro"/>
</p>

```javascript
// STEP 1: create function that returns promise
function sendRequest() {
   return request('http://site.com/')
}

// STEP 2: Pass that function to the retry(FUNCTION_NAME)
retry(sendRequest)
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('error'))
```

<h5 align="center">Checkout <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/basic/index.js">full example</a> or <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/basic">docs</a>.</h5>

## Install
You can get it on npm.
```javascript
npm install --save retryer
```

## Examples & HOWTO

Take a look at our many examples:

- [`basic`](https://github.com/ykrevnyi/reconnect/tree/master/examples/basic): How to retry promise.
- [`request`](https://github.com/ykrevnyi/reconnect/tree/master/examples/request): How to retry HTTP request.
- [`advanced-options`](https://github.com/ykrevnyi/reconnect/tree/master/examples/advanced-options): How to use options and customise log messages.
- [`async/await`](https://github.com/ykrevnyi/reconnect/tree/master/examples/async-await): How to use async/await.
- [`mongoose`](https://github.com/ykrevnyi/reconnect/tree/master/examples/mongoose): How to reconnect to Mongoose.
- [`mongodb`](https://github.com/ykrevnyi/reconnect/tree/master/examples/mongodb): How to reconnect to MongoDB.
- [`redis`](https://github.com/ykrevnyi/reconnect/tree/master/examples/redis): How to reconnect to Redis.
- [`bluebird`](https://github.com/ykrevnyi/reconnect/tree/master/examples/bluebird): How to retry bluebird promise.
- [`winson`](https://github.com/ykrevnyi/reconnect/tree/master/examples/winson): How to integrate winson logger.
- [`bunyan`](https://github.com/ykrevnyi/reconnect/tree/master/examples/bunyan): How to integrate bunyan logger.
- `Couldn't find appropriate example?` Create an issue and we will prepare one 💪

## Fully customisable
Change `anything` you need to `fit` your needs.

<p align="center">
  <img src="https://github.com/ykrevnyi/reconnect/tree/master/docs/retryer-options-v1.0.1.gif" alt="retryer.js options"/>
</p>
<h5 align="center">How to <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/advanced-options">customise it?</a></h5>


## Custom loggers

You can easely integrate any custom logger. Take a look at example :
* [`winson`](https://github.com/ykrevnyi/reconnect/tree/master/examples/winson): logger integration
* [`bunyan`](https://github.com/ykrevnyi/reconnect/tree/master/examples/bunyan): logger integration

<h5 align="center">How to <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/advanced-options">customise it?</a></h5>


## Available Options
**Option Name**|**Type**|**Default**|**Description**|**Example**
:-------------:|:------:|:---------:|:-------------:|:--------:|
`debug`|`Boolean`|`false`|Log debug information|<a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/advanced-options/options-debug.js">options-debug.js</a>
`total`|`Number`|`10`|Number of attempts to retry|<a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/advanced-options/options-total.js">options-total.js</a>
`timeout`|`Number`|`1000`|Backoff timeout (in ms)|<a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/advanced-options/options-timeout.js">options-timeout.js</a>
`_onStart`|`Function`|`function(attempt) {..}`|Is triggered on start for each attempt|<a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/advanced-options/options-on-start.js">options-on-start.js</a>
`_onError`|`Function`|`function(error, attempt) {..}`|Is triggered on error for each attempt|<a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/advanced-options/options-on-error.js">options-on-error.js</a>

### How to Pass Options?

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
<h5 align="center">Checkout full <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/advanced-options/index.js">example</a> or <a href="https://github.com/ykrevnyi/reconnect/tree/master/examples/advanced-options/">docs</a>.</h5>

## Development

#### Code Quality
Run `npm run lint` to statically validate the code.

Run `npm run test` to run unit tests.

#### Performance Tests
Run `npm run perf` to run the performance tests.

## Need Help?
Please submit an issue on GitHub and provide information about your setup.

## License
This project is licensed under the terms of the MIT license. See the LICENSE file.
