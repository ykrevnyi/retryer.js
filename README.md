# retryer.js

`retryer` is a tiny library that enables you to retry any action (ex. request).

<p align="center">
  <img src="https://github.com/ykrevnyi/reconnect/blob/docs/docs/retryer-v1.5.1.gif" alt="retryer.js intro"/>
</p>

## Install
You can get it on npm.
```javascript
npm install retryer --save
```

Or bower, too.
```javascript
bower install retryer --save
```

## Usage

<p align="center">
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/hello-world.js">hello-world</a> &bull;
  <b>request</b> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/mongoose.js">mongoose</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/mongodb.js">mongodb</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/redis.js">redis</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/angular.js">angular</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/react.js">react</a> &bull;
</p>

```javascript
// STEP 1: create function that returns promise
function sendRequest() {
   return request('http://mysite.com/')
}

// STEP 2: Pass that function to the retry(FUNCTION_NAME)
retry(sendRequest)
  .then(data => console.log('success'))
  .catch(error => console.log('error'))
```

Checkout [full example here]().
