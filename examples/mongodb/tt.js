import {MongoClient} from 'mongodb';
import Promise from 'bluebird';
import retry from 'retryer';

const url = 'mongodb://mongodb/test-db';

MongoClient.connect(url, (err, db) => {
  if (err) {
    return console.log('error');
  }

  console.log("Connected 🎉");
});
