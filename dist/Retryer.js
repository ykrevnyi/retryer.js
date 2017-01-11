'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _debugStartNotifier = require('./notifiers/debugStartNotifier');

var _debugStartNotifier2 = _interopRequireDefault(_debugStartNotifier);

var _debugErrorNotifier = require('./notifiers/debugErrorNotifier');

var _debugErrorNotifier2 = _interopRequireDefault(_debugErrorNotifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Retryer = function () {
  function Retryer(promise, options) {
    _classCallCheck(this, Retryer);

    options = options || {};

    // Turn debug mode on by default
    if (options.debug === undefined) {
      options.debug = true;
    }

    this._promise = promise;
    this._current = 0;

    this._total = options.total || 10;
    this._timeout = options.timeout || 1000;

    this._setNotifiers(options);
  }

  _createClass(Retryer, [{
    key: 'retry',
    value: function retry() {
      // _current starts from "0" -> so add 1 to start with "1"
      this._onStart(this._current + 1);

      return this._promise().then(this._handleSuccess.bind(this)).catch(this._handleError.bind(this));
    }
  }, {
    key: '_setNotifiers',
    value: function _setNotifiers(options) {
      if (options.debug) {
        this._onStart = _debugStartNotifier2.default;
        this._onError = _debugErrorNotifier2.default;
        return;
      }

      this._onStart = options.onStart || function () {};
      this._onError = options.onError || function () {};
    }

    /**
     * If promise succeeded - this method will be executed.
     *
     * @param  {Object} data Original response object
     * @return {Object}      Same object without changes
     */

  }, {
    key: '_handleSuccess',
    value: function _handleSuccess(data) {
      return data;
    }

    /**
     * If promise failed - this method will be executed.
     *
     * @param  {Object} err Original error
     * @return {Object}     Promise
     */

  }, {
    key: '_handleError',
    value: function _handleError(err) {
      // _current starts from "0" -> so add 1 to start with "1"
      this._onError(err, this._current + 1);
      this._increateAttempt();

      if (this._isLastAttempt()) {
        throw err;
      }

      // It's not the last attempt -> retry promise now
      return this._backoff();
    }

    /**
     * Custom retry scheduler.
     * Defines period of time when promise will be retried.
     *
     * @return {Object} Promise
     */

  }, {
    key: '_backoff',
    value: function _backoff() {
      var _this = this;

      var timerId = void 0;

      return new _bluebird2.default(function (resolve) {
        timerId = setTimeout(function () {
          clearTimeout(timerId);
          resolve(_this.retry());
        }, _this._timeout);
      });
    }

    /**
     * Simply increment attempt
     *
     * @return {void}
     */

  }, {
    key: '_increateAttempt',
    value: function _increateAttempt() {
      this._current++;
    }

    /**
     * Check if current attempt is the last one.
     *
     * @return {Boolean}
     */

  }, {
    key: '_isLastAttempt',
    value: function _isLastAttempt(asdf) {
      return this._current >= this._total;
    }
  }]);

  return Retryer;
}();

exports.default = Retryer;