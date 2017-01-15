import mongoose from 'mongoose';
import Promise from 'bluebird';
import retry from 'retryer';

// STEP 1: Promisify mongoose
mongoose.Promise = Promise;

// STEP 2: Create function that returns mongoose' promise
function mongooseConnect() {
  return mongoose.connect('mongodb://mongodb/test-db');
}

// STEP 3: Pass that function to the retry(FUNCTION_NAME)
// Notice that we pass `mongooseConnect` without brackets `mongooseConnect()`
// ✅ (Correct) retry(mongooseConnect)
// ❌ (Wrong)   retry(mongooseConnect())
retry(mongooseConnect)
  .then(data => console.log('Connected 🎉'))
  .catch(err => console.log('error'));


// BTW
// Here is how your code looks like without `retryer`
// mongoose.connect('mongodb://localhost/test');
// var db = mongoose.connection;
// db.on('error', console.log('error'));
// db.once('open', function() {
//   console.log('connected!');
// });
