import Promise from 'bluebird';
import mongoose from 'mongoose';
import retry from './index';

mongoose.Promise = Promise;

function promise() {
  return mongoose.connect('mongodb://mongodb/test-db');
}

retry(promise, {
  onStart: tick => {
    console.log(`Starting ${tick}`);
  },
  onError: (err, tick) => {
    console.log(`Got error for ${tick}`);
  }
})
  .then(data => {
    console.log('connected!', data);
  })
  .catch(err => {
    console.log('err', err);
  });
