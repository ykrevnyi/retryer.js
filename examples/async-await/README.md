
<h1 align="center">How to retry async/await</h1>

<p align="center">
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/basic/">basic</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/request/">request</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/mongoose/">mongoose</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/mongodb/">mongodb</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/redis/">redis</a> &bull;
  <b>async/await</b> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/bunyan/">bunyan</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/winston/">winston</a> &bull;
  <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/advanced-options/">advanced options</a>
</p>

<p align="center">
  <img src="https://github.com/ykrevnyi/retryer.js/tree/master/docs/retryer-v1.5.1.gif" alt="retryer.js intro"/>
</p>

In this `async-await` example we will take a look at async/await usage.

## Quick Start

### Given you have code:

```javascript
async function sendRequest() {
   await request('http://site.com/')
}

sendRequest()
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('Not connected 🤷‍'))
```

### With `retryer` it looks like
```javascript
async function sendRequest() {
   await request('http://site.com/')
}

retry(sendRequest)
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('Not connected 🤷‍'))
```
<h5 align="center">Full examples are: <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/async-await/index.js">async single</a> and <a href="https://github.com/ykrevnyi/retryer.js/tree/master/examples/async-await/index-both.js">async both</a>.</h5>

## Prefer diff?
```diff
async function sendRequest() {
   await request('http://site.com/')
}

-sendRequest()
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
cd retryer.js/examples/async-await
```

Install dependencies.
```bash
npm install
```

Start `basic` example.
```bash
npm start
```

## Need Help?
Please [submit an issue](https://github.com/ykrevnyi/retryer.js/issues) on GitHub and provide information about your setup.
