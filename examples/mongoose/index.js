import mongoose from 'mongoose';
import Promise from 'bluebird';
import retry from 'retryer';

// Get url from env
const URL = process.env.RETRYER_URL || 'mongodb://mongodb/test-db'

// STEP 1: Promisify mongoose
mongoose.Promise = Promise;

// STEP 2: Create function that returns mongoose' promise
function mongooseConnect() {
  return mongoose.connect(URL, {useMongoClient: true});
}

// STEP 3: Pass that function to the retry(FUNCTION_NAME)
// Notice that we pass `mongooseConnect` without brackets `mongooseConnect()`
// ✅ (Correct) retry(mongooseConnect)
// ❌ (Wrong)   retry(mongooseConnect())
retry(mongooseConnect)
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('Not connected 🤷‍'))


// BTW
// Here is how your code looks like without `retryer`
// mongoose.connect(URL);
// var db = mongoose.connection;
// db.on('error', console.log('Not connected 🤷‍'));
// db.once('open', function() {
//   console.log('connected!');
// });
