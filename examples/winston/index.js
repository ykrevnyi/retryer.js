import request from 'request-promise';
import winston from 'winston';
import retry from 'retryer';

// STEP 1. Initialize logger
var logger = new (winston.Logger)({
  transports: [new (winston.transports.Console)({raw: true})]
});

// STEP 2: create function that returns promise
function sendRequest() {
   return request('http://site.com/')
}

// STEP 3: Pass implement 'onStart' and/or 'onError' handlers
// 
// onStart(attempt)         - Is triggered on START for each attempt
// onError(error, attempt)  - Is triggered on ERROR for each attempt
var retryerConfig = {
  onStart: attempt => {
    logger.log('info', `Starting attempt ${attempt}`)
  },
  onError: (err, attempt) => {
    logger.log('info', `Attempt #${attempt} failed. Error ${err}`)
  }
}

retry(sendRequest, retryerConfig)
  .then(data => logger.log('info', 'Connected'))
  .catch(error => logger.error('info', 'Not connected 🤷‍'))
