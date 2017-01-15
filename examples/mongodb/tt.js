import {MongoClient} from 'mongodb';
import Promise from 'bluebird';
import retry from 'retryer';


+const connect = Promise.promisify(MongoClient.connect);

-MongoClient.connect('mongodb://mongodb/test-db', handler);
+function mongodbConnect() {
+  return connect('mongodb://mongodb/test-db');
+}

-function handler(err, db) {
-  if (err) {
-    return console.log('error');
-  }
-
-  console.log("Connected 🎉");
-}

+retry(mongodbConnect)
+  .then(data => console.log(`connected: ${data}`))
+  .catch(err => console.log(`not connected: ${err}`))
