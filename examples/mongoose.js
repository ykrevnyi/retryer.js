import Promise from 'bluebird';
import mongoose from 'mongoose';
import retry from '../index';

// STEP 1: Promisify mongoose
mongoose.Promise = Promise;

// STEP 2: Create function that returns mongoose' promise
function mongooseConnect() {
  return mongoose.connect('mongodb://mongodb/test-db');
}

// STEP 3: Pass that function to the retry(FUNCTION_NAME)
retry(mongooseConnect)
  .then(data => console.log('Connected 🎉'))
  .catch(err => console.log('error'););
