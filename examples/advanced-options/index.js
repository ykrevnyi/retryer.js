import request from 'request-promise';
import retry from 'retryer';

function failingPromise(totaFails) {
  let iteration = 0;

  return function getPromise() {
    if (iteration++ >= totaFails) {
      return Promise.resolve('success');
    }

    return Promise.reject(`Cannot connect to site.com`);
  }
}

function sendRequest() {
   return request('http://non-existing-resource.com/');
  //  return request('http://google.com/');
}

const options = {
  debug: false,
  timeout: 2500,
  total: 3,
  onStart,
  onError
};

console.log('**********************************');
console.log('*** Example 1: Failing promise ***');
console.log('**********************************');
retry(sendRequest, options)
  .then(data => console.log('🛰 Gliding the space'))
  .catch(error => {
    console.log('🚧 Sorry mate, the rocket is broken. You cannot fly to the moon ATM')

    setTimeout(function() {
      console.log('\n\n*************************************');
      console.log('*** Example 2: Successful promise ***');
      console.log('*************************************');
    }, 2500)

    setTimeout(function() {
      retry(failingPromise(1), options)
        .then(data => console.log('🛰 Gliding the space'))
    }, 3000)
  })


// Helper functions
function onStart(attempt) {
  console.log(`🌍 🚀 🌑 Flying to the moon #${attempt} time`);
}

function onError(err, attempt) {
  if (attempt >= 3) {
    return;
  }

  if (attempt >= 2) {
    return console.log(`📛 📛 📛 Oh, crap! Retrying the last time 🚦`);
  }

  console.log(`📛 📛 📛 Something went wrong. Restarting engine in 2sec 🚦`);
}


setTimeout(() => {}, 20000000)
