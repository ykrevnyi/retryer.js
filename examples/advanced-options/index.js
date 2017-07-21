import request from 'request-promise';
import retry from 'retryer';

// Get url from env
const URL = process.env.RETRYER_URL || 'http://site.com/'

// Define options
const options = {
  timeout: 2500,
  total: 3,
  onStart,
  onError
};

// STEP 1: create function that returns promise
function sendRequest() {
  return request(URL);
}

// STEP 2: Pass that function to the retry(FUNCTION_NAME, OPTIONS)
// Notice that we pass `sendRequest` without brackets `sendRequest()`
// ✅ (Correct) retry(sendRequest, options)
// ❌ (Wrong)   retry(sendRequest(), options)
retry(sendRequest, options)
  .then(data => console.log('🛰 Gliding the space'))
  .catch(error => console.log('🚧 Sorry mate, the rocket is broken. You cannot fly to the moon ATM'))



// Some helper functions
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
