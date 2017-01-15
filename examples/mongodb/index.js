import {MongoClient} from 'mongodb';
import Promise from 'bluebird';
import assert from 'assert';
import retry from 'retryer';


const url = 'mongodb://mongodb/test-db';

// MongoClient.connect('mongodb://mongodb/test-db', (err, db) => {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");
//
//   db.close();
// });

const connectPromise = Promise.promisify(MongoClient.connect);
function mongodbConnect() {
  return connectPromise('mongodb://mongodb/test-db');
}

retry(mongodbConnect)
  .then(data => console.log(`connected: ${data}`))
  .catch(err => console.log(`not connected: ${err}`))


// // STEP 1: Promisify mongoose
// mongoose.Promise = Promise;
//
// // STEP 2: Create function that returns mongoose' promise
// function mongooseConnect() {
//   return mongoose.connect('mongodb://mongodb/test-db');
// }
//
// // STEP 3: Pass that function to the retry(FUNCTION_NAME)
// // Notice that we pass `mongooseConnect` without brackets `mongooseConnect()`
// // ✅ (Correct) retry(mongooseConnect)
// // ❌ (Wrong)   retry(mongooseConnect())
// retry(mongooseConnect)
//   .then(data => console.log('Connected 🎉'))
//   .catch(err => console.log('error'));
//
//
// // BTW
// // Here is how your code looks like without `retryer`
// // mongoose.connect('mongodb://localhost/test');
// // var db = mongoose.connection;
// // db.on('error', console.log('error'));
// // db.once('open', function() {
// //   console.log('connected!');
// // });
