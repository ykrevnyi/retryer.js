'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = retry;

var _Retryer = require('./Retryer');

var _Retryer2 = _interopRequireDefault(_Retryer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function retry(promise, options) {
  var retryer = new _Retryer2.default(promise, options);

  return retryer.retry();
};