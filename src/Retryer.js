import Promise from 'bluebird';
import debugStartNotifier from './notifiers/debugStartNotifier';
import debugErrorNotifier from './notifiers/debugErrorNotifier';

export default class Retryer {
  constructor(promise, options) {
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

  retry() {
    // _current starts from "0" -> so add 1 to start with "1"
    this._onStart(this._current + 1);

    return this._promise()
      .then(this._handleSuccess.bind(this))
      .catch(this._handleError.bind(this));
  }

  _setNotifiers(options) {
    if (options.debug) {
      this._onStart = debugStartNotifier;
      this._onError = debugErrorNotifier;
      return;
    }

    this._onStart = options.onStart || function() {};
    this._onError = options.onError || function() {};
  }

  /**
   * If promise succeeded - this method will be executed.
   *
   * @param  {Object} data Original response object
   * @return {Object}      Same object without changes
   */
  _handleSuccess(data) {
    return data;
  }

  /**
   * If promise failed - this method will be executed.
   *
   * @param  {Object} err Original error
   * @return {Object}     Promise
   */
  _handleError(err) {
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
  _backoff() {
    let timerId;

    return new Promise(resolve => {
      timerId = setTimeout(() => {
        clearTimeout(timerId);
        resolve(this.retry());
      }, this._timeout);
    });
  }

  /**
   * Simply increment attempt
   *
   * @return {void}
   */
  _increateAttempt() {
    this._current++;
  }

  /**
   * Check if current attempt is the last one.
   *
   * @return {Boolean}
   */
  _isLastAttempt() {
    return this._current >= this._total;
  }
}
