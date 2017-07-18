import {MongoClient} from 'mongodb';
import Promise from 'bluebird';
import assert from 'assert';
import retry from 'retryer';

// STEP 1: Promisify mongodb
const connectPromise = Promise.promisify(MongoClient.connect);

// STEP 2: Create function that returns mongodb' promise
function mongodbConnect() {
  return connectPromise('mongodb://mongodb/test-db');
}

// STEP 3: Pass that function to the retry(FUNCTION_NAME)
// Notice that we pass `mongodbConnect` without brackets `mongodbConnect()`
// ✅ (Correct) retry(mongodbConnect)
// ❌ (Wrong)   retry(mongodbConnect())
retry(mongodbConnect)
  .then(data => console.log('Connected 🎉'))
  .catch(error => console.log('Not connected ¯\_(ツ)_/¯'))


// BTW
// Here is how your code looks like without `retryer`
// MongoClient.connect('mongodb://mongodb/test-db', handler);
//
// function handler(err, db) {
//   if (err) {
//     return console.log('error');
//   }
//
//   console.log('Connected 🎉');
// }
