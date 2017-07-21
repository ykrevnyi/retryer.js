// Hey, how are you?
// Consider using `request-promise` instead of `request`

import Promise from 'bluebird';
import request from 'request';
import retry from 'retryer';

// Get url from env
const URL = process.env.RETRYER_URL || 'http://site.com/'
const requestPromise = Promise.promisify(request);

// STEP 1: create function that returns promise
function sendRequest() {
  return requestPromise(URL);
}

// STEP 2: Pass that function to the retry(FUNCTION_NAME)
// Notice that we pass `sendRequest` without brackets `sendRequest()`
// ✅ (Correct) retry(sendRequest)
// ❌ (Wrong)   retry(sendRequest())
retry(sendRequest)
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('Not connected 🤷‍'))


// BTW
// Here is how your code looks like without `retryer`
// request(URL, (err, data) => {
//   if (err) {
//     return console.log(`error`);
//   }
//
//   console.log('Connected 🎉');
// });
