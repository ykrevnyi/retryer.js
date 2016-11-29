# Retryer

An extremely simple (and customizeable) promise retryer.

```javascript
// STEP 1: Your promise
const myPromise = Bluebird.resolve();

// STEP 2: Create a function that returns myPromise
function promise() {
  return myPromise;
}

// STEP 3: Pass that function as first argument
retry(promise)
  .then(data => {
    console.log('Promise has been resolved :)', data);
  })
  .catch(err => {
    console.log('Promise failed :(', err);
  });
```
