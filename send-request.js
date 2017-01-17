const Promise = require('bluebird');
const mongoose = require('mongoose');
const retry = require('./dist/index').default;

function failingPromise(totaFails) {
  let iteration = 0;

  return function getPromise() {
    if (iteration++ >= totaFails) {
      return Promise.resolve('success');
    }

    return Promise.reject(`Cannot connect to site.com`);
  }
}

// STEP 1: Your promise
const myPromise = failingPromise(3);

// STEP 2: Create a function that returns myPromise
// function promise() {
//   return myPromise;
// }

// STEP 3: Pass that function as first argument
retry(myPromise, {timeout: 1500})
  .then(data => {
    setTimeout(() => console.log('Connected 🎉'), 500)
    // console.log('Connected 🎉');
  })
  .catch(err => {
    console.log('Promise failed :(', err);
  });


setTimeout(() => {}, 60 * 1000)
