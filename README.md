# Retryer

`retryer` is a tiny library that enables you to retry any action (for example, request).

Usage example:

```javascript
// STEP 1: create function that returns promise
function sendRequest() {
   return request(‘http://mysite.com/')
}

// STEP 2: Pass that function to the retry(FUNCTION_NAME)
retry(sendRequest)
  .then(data => console.log(’success'))
  .catch(error => console.log(‘error'))
```
