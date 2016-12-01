import Promise from 'bluebird';
import mongoose from 'mongoose';
import retry from './index';

function failingPromise(totaFails) {
  let iteration = 0;

  return function getPromise() {
    if (iteration++ >= totaFails) {
      return Promise.resolve('success');
    }

    return Promise.reject(`cannot connect to site.com`);
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
    console.log(`\n🎉 Promise has been resolved 🎉`);
  })
  .catch(err => {
    console.log('Promise failed :(', err);
  });
