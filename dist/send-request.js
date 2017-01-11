'use strict';

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function failingPromise(totaFails) {
  var iteration = 0;

  return function getPromise() {
    if (iteration++ >= totaFails) {
      return _bluebird2.default.resolve('success');
    }

    return _bluebird2.default.reject('cannot connect to site.com');
  };
}

// STEP 1: Your promise
var myPromise = failingPromise(3);

// STEP 2: Create a function that returns myPromise
// function promise() {
//   return myPromise;
// }

// STEP 3: Pass that function as first argument
(0, _index2.default)(myPromise, { timeout: 1500 }).then(function (data) {
  console.log('\n\uD83C\uDF89 Promise has been resolved \uD83C\uDF89');
}).catch(function (err) {
  console.log('Promise failed :(', err);
});

setTimeout(function () {}, 60 * 1000);