import Promise from 'bluebird';

let debug = {
  spies: {
    init: null,
    tick: null,
    error: null,
    success: null,
  }
};

class Retryer {

  constructor(promise, options) {
    this._promise = promise;
    this._current = 0;

    this._total = 0 || options.total;
    this._timeout = 0 || options.timeout;

    debug.spies.init && debug.spies.init();
  }

  retry() {
    debug.spies.tick && debug.spies.tick();

    return this._promise()
      .then(this._handleSuccess.bind(this))
      .catch(this._handleError.bind(this));
  }

  _handleSuccess(data) {
    debug.spies.success && debug.spies.success();

    return data;
  }

  _handleError(err) {
    this.increateAttmpt();

    if (this.isLastAttempt()) {
      throw err;
    }

    debug.spies.error && debug.spies.error();

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

module.exports = function(promise, total, timeout) {
  const retryer = new Retryer(promise, {
    timeout: timeout || 100,
    total: total || 10
  });

  return retryer.retry();
}

module.exports.debug = debug;
