
<h1 align="center">How to retry HTTP request</h1>

<p align="center">
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/basic/">basic</a> &bull;
  <b>request</b> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/mongoose/">mongoose</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/mongodb/">mongodb</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/redis/">redis</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/async-await/">async/await</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/bunyan/">bunyan</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/winston/">winston</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/advanced-options/">advanced options</a>
</p>

<p align="center">
  <img src="https://github.com/ykrevnyi/retryer.js/blob/master/assets/retryer-v1.5.1.gif" alt="retryer.js intro"/>
</p>

In this `request` example we will retry http requests.

## Quick Start

### Given you have code:

```javascript
// Consider using `request-promise` instead of `request`
request('http://site.com/')
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('Not connected 🤷‍'))
```

### With `retryer` it looks like
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
<h5 align="center">Full examples are: <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/request/request.js">request</a> and <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/request/request-promise.js">request-promise</a>.</h5>

## Prefer diff?
```diff
+function sendRequest() {
+   return request('http://site.com/')
+}

-request('http://site.com/')
+retry(sendRequest)
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('Not connected 🤷‍'))
```

## Try it yourself
Clone GitHub repository.
```bash
git clone https://github.com/ykrevnyi/retryer.js
```

Open `basic` example.
```bash
cd retryer.js/examples/request
```

Install dependencies.
```bash
npm install
```

Start `basic` example.
```bash
# using 'request-promise' pacakge
npm start
# or
# using 'request' pacakge
# npm run start-without-promise
```

## Need Help?
Please [submit an issue](https://github.com/ykrevnyi/retryer.js/issues) on GitHub and provide information about your setup.
