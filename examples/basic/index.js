import request from 'request-promise';
import retry from 'retryer';

// STEP 1: create function that returns promise
function sendRequest() {
   return request('http://site.com/')
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
// request('http://site.com/')
//   .then(data => console.log('Connected 🎉'))
//   .catch(error => console.log('Not connected 🤷‍'))
