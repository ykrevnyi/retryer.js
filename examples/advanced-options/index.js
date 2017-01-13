import request from 'request-promise';
import retry from 'retryer';

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

retry(sendRequest, options)
  .then(data => console.log('🛰 Gliding the space'))
  .catch(error => console.log('🚧 Sorry mate, the rocket is broken. You cannot fly to the moon ATM'))


// Helper functions
function onStart(attempt) {
  console.log(`🌍 🚀 🌑 Flying to the moon #${attempt} time`);
}

function onError(err, attempt) {
  if (attempt >= 3) {
    return console.log(`📛 📛 📛 Oh, crap! Retrying the last time 🚦`);
  }

  console.log(`📛 📛 📛 Oh, crap! Something went wrong. Restarting engine in 2sec 🚦`);
}
