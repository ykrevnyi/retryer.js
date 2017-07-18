import request from 'request-promise';
import bunyan from 'bunyan';
import retry from 'retryer';

// STEP 1. Initialize logger
const logger = bunyan.createLogger({name: "mylogger"});

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
    logger.info(`Starting attempt ${attempt}`)
  },
  onError: (err, attempt) => {
    logger.info(`Attempt #${attempt} failed. Error ${err}`)
  }
}

// STEP 4: Don't forget to implement final handlers
retry(sendRequest, retryerConfig)
  .then(data => logger.info('Connected'))
  .catch(error => logger.error('Not connected 🤷‍'))
