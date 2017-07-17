import Retryer from './Retryer';
import sinon from 'sinon';

/**
 * Test helper.
 *
 * This class only defines few spies for testing purposes.
 * Does not have any additinal functional.
 */
export default class DebugRetryer extends Retryer {
  constructor(promise, options) {
    super(promise, options);

    this._spies = {
      init: sinon.spy(),
      tick: sinon.spy(),
      error: sinon.spy(),
      success: sinon.spy()
    };

    this._spies.init && this._spies.init();
  }

  getSpies() {
    return this._spies;
  }

  retry() {
    this._spies.tick && this._spies.tick();

    return super.retry();
  }

  _handleSuccess(data) {
    this._spies.success && this._spies.success();

    return super._handleSuccess(data);
  }

  _backoff() {
    this._spies.error && this._spies.error();

    return super._backoff();
  }
}
