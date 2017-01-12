# retryer.js

`retryer` is a tiny library that enables you to retry any action (ex. request).

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

<h5 align="center">Checkout <a href="#">full example here.</a></h5>

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

## Usage

<p align="center">
  <b>basic</b> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/hello-world.js">hello-world</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/request.js">request</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/mongoose.js">mongoose</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/mongodb.js">mongodb</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/redis.js">redis</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/angular.js">angular</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/react.js">react</a> &bull;
</p>
