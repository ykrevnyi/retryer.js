import Promise from 'bluebird';
import mongoose from 'mongoose';
import retry from './index';

mongoose.Promise = Promise;

function promise() {
  return mongoose.connect('mongodb://mongodb/test-db');
}

retry(promise, {debug: true})
  .then(data => {
    console.log('connected!', data);
  })
  .catch(err => {
    console.log('err', err);
  });
