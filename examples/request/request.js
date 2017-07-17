// Hey, how are you?
// Consider using `request-promise` instead of `request`

import Promise from 'Bluebird';
import request from 'request';
import retry from 'retryer';

const requestPromise = Promise.promisify(request);

// STEP 1: create function that returns promise
function sendRequest() {
  return requestPromise('http://site.com/');
}

// STEP 2: Pass that function to the retry(FUNCTION_NAME)
// Notice that we pass `sendRequest` without brackets `sendRequest()`
// ✅ (Correct) retry(sendRequest)
// ❌ (Wrong)   retry(sendRequest())
retry(sendRequest)
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('error'))


// BTW
// Here is how your code looks like without `retryer`
// request('http://site.com/', (err, data) => {
//   if (err) {
//     return console.log(`error`);
//   }
//
//   console.log('Connected 🎉');
// });
