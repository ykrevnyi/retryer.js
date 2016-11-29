import Promise from 'bluebird';
import mongoose from 'mongoose';
import retry from '../index';

// STEP 1: Promisify mongoose
mongoose.Promise = Promise;

// STEP 2: Create function that returns mongoose' promise
function promise() {
  return mongoose.connect('mongodb://mongodb/test-db');
}

// STEP 3: Pass that function to the retry(FUNCTION_NAME)
retry(promise, {debug: true})
  .then(data => {
    console.log('connected!', data);
  })
  .catch(err => {
    console.log('NOT connected', err);
  });
