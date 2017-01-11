import test from 'tape';
import sinon from 'sinon';
import Promise from 'bluebird';
import DebugRetryer from '../src/DebugRetryer';

test('Retryer Spec', t => {

  t.test('is green', t => {
    const res = true;
    t.equal(res, true);
    t.end();
  });

  t.test('resolves promise', t => {
    const retryer = getRetryer();
    const retry = retryer.retry;
    const spies = retryer.spies;

    const promise = resolvePromise();

    retry(promise)
      .then(data => {
        t.equal(spies.init.callCount, 1);
        t.equal(spies.tick.callCount, 1);
        t.equal(spies.error.callCount, 0);
        t.equal(spies.success.callCount, 1);
        t.end();
      })
      .catch(err => t.fail('Promise should be resolved', err));
  });

  t.test('rejectes promise', t => {
    const retryer = getRetryer();
    const retry = retryer.retry;
    const spies = retryer.spies;

    const promise = rejectPromise();

    retry(promise, {total: 2})
      .then(data => {
        t.fail('Promise should not be resolved')
      })
      .catch(err => {
        t.equal(spies.init.callCount, 1);
        t.equal(spies.tick.callCount, 2);
        t.equal(spies.error.callCount, 1);
        t.equal(spies.success.callCount, 0);
        t.end();
      })
  });

  t.test('retries N times with success', t => {
    const retryer = getRetryer();
    const retry = retryer.retry;
    const spies = retryer.spies;

    let promise = failingPromise(3);

    retry(promise)
      .then(data => {
        t.equal(spies.init.callCount, 1);
        t.equal(spies.tick.callCount, 4, 'tick');
        t.equal(spies.error.callCount, 3, 'error');
        t.equal(spies.success.callCount, 1, 'success');
        t.end();
      })
      .catch(err => {
        t.fail('Promise should be resolved');
      });
  });

  t.test('retries N times with fail', t => {
    const retryer = getRetryer();
    const retry = retryer.retry;
    const spies = retryer.spies;

    let promise = failingPromise(5);

    retry(promise, {total: 3})
      .then(data => {
        t.fail('Promise should not be resolved');
      })
      .catch(err => {
        t.equal(spies.init.callCount, 1);
        t.equal(spies.tick.callCount, 3, 'tick');
        t.equal(spies.error.callCount, 2, 'error');
        t.equal(spies.success.callCount, 0, 'success');
        t.end();
      });
  });

  t.test('retries exect M of N times with success', t => {
    const retryer = getRetryer();
    const retry = retryer.retry;
    const spies = retryer.spies;

    let promise = failingPromise(4);

    retry(promise, {total: 5})
      .then(data => {
        t.equal(spies.init.callCount, 1);
        t.equal(spies.tick.callCount, 5, 'tick');
        t.equal(spies.error.callCount, 4, 'error');
        t.equal(spies.success.callCount, 1, 'success');
        t.end();
      })
      .catch(err => {
        t.fail('Promise should be resolved.');
      });
  });

  t.test('retries exect M of N times with fail', t => {
    const retryer = getRetryer();
    const retry = retryer.retry;
    const spies = retryer.spies;

    let promise = failingPromise(6);

    retry(promise, {total: 5})
      .then(err => {
        t.fail('Promise should not be resolved.');
      })
      .catch(data => {
        t.equal(spies.init.callCount, 1);
        t.equal(spies.tick.callCount, 5);
        t.equal(spies.error.callCount, 4);
        t.equal(spies.success.callCount, 0);
        t.end();
      });
  });

  t.test('notifies notifiers with correct values', t => {
    const retryer = getRetryer();
    const retry = retryer.retry;
    const spies = retryer.spies;

    let promise = failingPromise(4);
    let onError = sinon.spy();
    let onStart = sinon.spy();

    retry(promise, {
      total: 5,
      onError,
      onStart
    })
      .then(data => {
        t.equal(onStart.callCount, 5);
        t.equal(onError.callCount, 4);

        // Check if notifiers received correct values
        t.same(onStart.args, [[1], [2], [3], [4], [5]]);
        t.same(onError.args, [
            ['reject 1', 1],
            ['reject 2', 2],
            ['reject 3', 3],
            ['reject 4', 4]
          ]
        );

        t.end();
      })
      .catch(err => {
        t.fail('Promise should be resolved.');
      });
  });

  t.test('sets default notifiers on DEBUG flag', t => {
    const retryer = getRetryer({debug: true});
    const retry = retryer.retry;
    const spies = retryer.spies;

    t.equal(typeof retryer.instance._onStart, 'function');
    t.equal(typeof retryer.instance._onError, 'function');
    t.end();
  });

});

function getRetryer(options) {
  const retryer = new DebugRetryer(null, options);

  function retry(promise, options) {
    options = options || {};

    retryer._promise = promise;
    retryer._total = options.total || 10;
    retryer._timeout = options.timeout || 100;
    retryer._onStart = options.onStart || function() {};
    retryer._onError = options.onError || function() {};

    return retryer.retry();
  }

  return {
    retry,
    instance: retryer,
    spies: retryer.getSpies()
  };
}

function failingPromise(totaFails) {
  let iteration = 0;

  return function getPromise() {
    if (iteration++ >= totaFails) {
      return Promise.resolve('success');
    }

    return Promise.reject(`reject ${iteration}`);
  }
}

function resolvePromise() {
  return function() {
    return Promise.resolve();
  }
}

function rejectPromise() {
  return function() {
    return Promise.reject();
  }
}
