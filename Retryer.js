import Promise from 'bluebird';

export default class Retryer {

  constructor(promise, options) {
    options = options || {};

    this._promise = promise;
    this._current = 0;

    this._total = 0 || options.total;
    this._timeout = 0 || options.timeout;
  }

  retry() {
    return this._promise()
      .then(this._handleSuccess.bind(this))
      .catch(this._handleError.bind(this));
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
  _isLastAttempt(asdf) {
    return this._current >= this._total;
  }

}
