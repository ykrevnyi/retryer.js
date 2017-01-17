# retryer.js

`retryer` is a tiny, battle tested library that enables you to retry promises.

<p align="center">
  <img src="https://github.com/ykrevnyi/reconnect/blob/docs/docs/retryer-v1.5.1.gif" alt="retryer.js intro"/>
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

<h5 align="center">Checkout <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/basic/index.js">full example</a> or <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/basic">docs</a>.</h5>

## Install
You can get it on npm.
```javascript
npm install retryer --save
```

Or bower, too.
```javascript
bower install retryer --save
```

Or just [download a ZIP file.](https://github.com/ykrevnyi/reconnect/archive/master.zip)

## Examples & HOWTO

Take a look at our many examples:

- [`basic`](https://github.com/ykrevnyi/reconnect/blob/docs/examples/basic): How to retry promise.
- [`request`](https://github.com/ykrevnyi/reconnect/blob/docs/examples/request): How to retry HTTP request.
- [`advanced-options`](https://github.com/ykrevnyi/reconnect/blob/docs/examples/advanced-options): How to use options and customise log messages.
- [`async/await`](https://github.com/ykrevnyi/reconnect/blob/docs/examples/async-await): How to use async/await.
- [`mongoose`](https://github.com/ykrevnyi/reconnect/blob/docs/examples/mongoose): How to reconnect to Mongoose.
- [`mongodb`](https://github.com/ykrevnyi/reconnect/blob/docs/examples/mongodb): How to reconnect to MongoDB.
- [`redis`](https://github.com/ykrevnyi/reconnect/blob/docs/examples/redis): How to reconnect to Redis.
- `Couldn't find appropriate example?` Create an issue and we will prepare one 💪

## Fully customisable
Change `anything` you need to `fit` your needs.

<p align="center">
  <img src="https://github.com/ykrevnyi/reconnect/blob/docs/docs/retryer-options-v1.0.1.gif" alt="retryer.js options"/>
</p>
<h5 align="center">How to <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/advanced-options">customise it?</a></h5>


## Available Options
**Option Name**|**Type**|**Default**|**Description**|**Example**
:-------------:|:------:|:---------:|:-------------:|:--------:|
`debug`|`Boolean`|`false`|Log debug information|<a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/advanced-options/options-debug.js">options-debug.js</a>
`total`|`Number`|`10`|Number of attempts to retry|<a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/advanced-options/options-total.js">options-total.js</a>
`timeout`|`Number`|`1000`|Backoff timeout (in ms)|<a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/advanced-options/options-timeout.js">options-timeout.js</a>
`_onStart`|`Function`|`function(attempt) {..}`|Is triggered on start for each attempt|<a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/advanced-options/options-on-start.js">options-on-start.js</a>
`_onError`|`Function`|`function(error, attempt) {..}`|Is triggered on error for each attempt|<a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/advanced-options/options-on-error.js">options-on-error.js</a>

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
<h5 align="center">Checkout full <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/advanced-options/index.js">example</a> or <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/advanced-options/">docs</a>.</h5>

## Need Help?
Please submit an issue on GitHub and provide information about your setup.

## License
This project is licensed under the terms of the MIT license. See the LICENSE file.