
<h1 align="center">retryer.js examples</h1>

<p align="center">
  <b>basic</b> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/hello-world.js">hello-world</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/request.js">request</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/mongoose.js">mongoose</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/mongodb.js">mongodb</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/redis.js">redis</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/angular.js">angular</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/react.js">react</a> &bull;
  <a href="https://github.com/ykrevnyi/reconnect/blob/docs/examples/react.js">async/await</a>
</p>

In this `basic` example we will take a look at the most basic request retry.

## Quick Start

### Given you have code:

```javascript
// Send request to the http://site.com/
request('http://site.com/')
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('error'))
```

### With `retryer` it looks like
```javascript
function myPromise() {
  // Send request to the http://site.com/
  return request('http://site.com/')
}

retry(myPromise)
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('error'))
```

## Run `basic` example
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
// before
request('http://site.com/');

// after
function myPromise() {
  return request('http://site.com/');
}
```

And then call it:
```javascript
// before
request('http://site.com/')
  .then(..)
  .catch(..)

// after
// Notice that we pass `myPromise` and NOT `myPromise()`
retry(myPromise)
  .then(..)
  .catch(..)
```
