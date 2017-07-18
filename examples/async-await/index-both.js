import request from 'request-promise';
import retry from 'retryer';

// STEP 1: create function that returns promise
async function sendRequest() {
   await request('http://site.com/')
}

async function retryAsync() {
  await retry(sendRequest)
}

// STEP 2: Pass that function to the retry(FUNCTION_NAME)
// Notice that we pass `sendRequest` without brackets `sendRequest()`
// ✅ (Correct) retry(sendRequest)
// ❌ (Wrong)   retry(sendRequest())
// retry(sendRequest)
//   .then(data => console.log('Connected 🎉'))
//   .catch(error => console.log('Not connected ¯\\_(ツ)_/¯'))
retryAsync(sendRequest)
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('Not connected ¯\\_(ツ)_/¯'))

// BTW
// Here is how your code looks like without `retryer`
// request('http://site.com/')
//   .then(data => console.log('Connected 🎉'))
//   .catch(error => console.log('Not connected ¯\\_(ツ)_/¯'))
