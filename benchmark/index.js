
import Benchmark from "benchmark";
import DebugRetryer from '../src/DebugRetryer';

var bench = new Benchmark('retry#resolve', {
  'defer': true,
  'onCycle': function(event) {
    console.log(String(event.target));
  },
  'fn': function(deferred) {
    const retryer = getRetryer();
    const retry = retryer.retry;
    const promise = resolvePromise();

    retry(promise)
      .then(data => {
        deferred.resolve();
      })
  }
});

bench.run({async: true});

// Helpers
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

function resolvePromise() {
  return function() {
    return Promise.resolve();
  };
}