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

  _handleSuccess(data) {
    return data;
  }

  _handleError(err) {
    this.increateAttmpt();

    if (this.isLastAttempt()) {
      throw err;
    }

    return this._backoff();
  }

  _backoff() {
    let timerId;

    return new Promise(resolve => {
      timerId = setTimeout(() => {
        clearTimeout(timerId);
        resolve(this.retry());
      }, this._timeout);
    });
  }

  increateAttmpt() {
    this._current++;
  }

  isLastAttempt() {
    return this._current >= this._total;
  }

}
