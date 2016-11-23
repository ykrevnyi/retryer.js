import Promise from 'bluebird';
import mongoose from 'mongoose';
import retryer from './retryer';

mongoose.Promise = Promise;

const url = 'mongodb://mongodb/test-db';
const dbconfig = {
  server: {
    reconnectTries: 10,
    reconnectInterval: 2000,
    socketOptions: {
      autoReconnect: false
    }
  }
}

function prom() {
  return mongoose.connect(url, dbconfig);
}

// retryer
retryer(prom)
  .then(data => {
    console.log('done', data);
  })
  .catch(err => {
    console.log('err', err);
  })

// function initialConnect() {
//   return mongoose.connect(url, dbconfig);
// }

// export default function() {
//   return retryer.run({
//     debug: true,
//     delay: 3000,
//     maxRetries: 10,
//     promise: initialConnect
//   });
// }
