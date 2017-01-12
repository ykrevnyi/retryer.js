# retryer.js

`retryer` is a tiny library that enables you to retry any action (ex. request).

![retryer.js-intro](https://github.com/ykrevnyi/reconnect/blob/master/docs/retryer-v1.3.1.gif)

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
