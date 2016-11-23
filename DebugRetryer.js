import Retryer from './Retryer';

let debug = {
  spies: {
    init: null,
    tick: null,
    error: null,
    success: null,
  }
};

export default class DebugRetryer extends Retryer {

  constructor(promise, options) {
    debug.spies.init && debug.spies.init();

    super(promise, options);
  }

}
