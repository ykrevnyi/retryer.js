
<div align="center">

# retryer.js
##### retryer.js is a tiny, battle tested library that enables you to retry promises.
[![GitHub release](https://img.shields.io/github/release/ykrevnyi/retryer.js.svg)](https://github.com/ykrevnyi/retryer.js/releases/tag/v1.1.1)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f0d909662a7849dbbfeb33782dda6b32)](https://www.codacy.com/app/ykrevnyi/retryer.js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ykrevnyi/retryer.js&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/ykrevnyi/retryer.js.svg?branch=master)](https://travis-ci.org/ykrevnyi/retryer.js)
[![npm](https://img.shields.io/npm/dt/retryer.svg)](https://www.npmjs.com/package/retryer)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://github.com/ykrevnyi/retryer.js/blob/master/LICENSE)

<img src="https://github.com/ykrevnyi/retryer.js/blob/master/assets/retryer-v1.5.1.gif" alt="retryer.js intro"/>
</div>

## Quickstart
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

<h5 align="center">Checkout <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/basic/index.js">full example</a> or <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/basic">step by step guide</a>.</h5>

## Install
You can get it on npm.
```javascript
npm install --save retryer
```

## Examples & HOWTO

Take a look at our many examples:

- [`basic`](https://github.com/ykrevnyi/retryer.js/tree/master/examples/basic): How to retry promise.
- [`request`](https://github.com/ykrevnyi/retryer.js/tree/master/examples/request): How to retry HTTP request.
- [`mongoose`](https://github.com/ykrevnyi/retryer.js/tree/master/examples/mongoose): How to reconnect to Mongoose.
- [`mongodb`](https://github.com/ykrevnyi/retryer.js/tree/master/examples/mongodb): How to reconnect to MongoDB.
- [`redis`](https://github.com/ykrevnyi/retryer.js/tree/master/examples/redis): How to reconnect to Redis.
- [`async/await`](https://github.com/ykrevnyi/retryer.js/tree/master/examples/async-await): How to retry async/await.
- [`bluebird`](https://github.com/ykrevnyi/retryer.js/tree/master/examples/basic): How to retry bluebird promise.
- [`bunyan`](https://github.com/ykrevnyi/retryer.js/tree/master/examples/bunyan): How to integrate bunyan logger.
- [`winston`](https://github.com/ykrevnyi/retryer.js/tree/master/examples/winston): How to integrate winston logger.
- [`advanced-options`](https://github.com/ykrevnyi/retryer.js/tree/master/examples/advanced-options): How to use options and customise log messages.
- `Couldn't find appropriate example?` Create an issue and we will prepare one 💪

## Fully customisable
Change `anything` you need to `fit` your needs.

<p align="center">
  <img src="https://github.com/ykrevnyi/retryer.js/blob/master/assets/retryer-options-v1.0.1.gif" alt="retryer.js options"/>
</p>
<h5 align="center">How to <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/advanced-options">customise it?</a></h5>


### Custom loggers

You can easely integrate any custom logger. Take a look at examples:
* [`winston`](https://github.com/ykrevnyi/retryer.js/tree/master/examples/winston): logger integration
* [`bunyan`](https://github.com/ykrevnyi/retryer.js/tree/master/examples/bunyan): logger integration


### Available Options
**Option Name**|**Type**|**Default**|**Description**|**Example**
:-------------:|:------:|:---------:|:-------------:|:--------:|
`total`|`Number`|`10`|Number of attempts to retry|<a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/advanced-options/options-total.js">options-total.js</a>
`timeout`|`Number`|`1000`|Backoff timeout (in ms)|<a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/advanced-options/options-timeout.js">options-timeout.js</a>
`onStart`|`Function`|`function(attempt) {..}`|Is triggered on start for each attempt|<a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/advanced-options/options-on-start.js">options-on-start.js</a>
`onError`|`Function`|`function(error, attempt) {..}`|Is triggered on error for each attempt|<a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/advanced-options/options-on-error.js">options-on-error.js</a>

#### How to Pass Options?

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
<h5 align="center">Checkout full <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/advanced-options/index.js">example</a> or <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/advanced-options/">step by step guide</a>.</h5>

## Development

#### Code Quality
Run `npm run lint` to statically validate the code.

Run `npm run test` to run unit tests.

#### Performance Tests
Run `npm run perf` to run the performance tests.

## Need Help?
Please [submit an issue](https://github.com/ykrevnyi/retryer.js/issues) on GitHub and provide information about your setup.

## License
This project is licensed under the terms of the MIT license. See the [LICENSE file](https://github.com/ykrevnyi/retryer.js/blob/master/LICENSE).
