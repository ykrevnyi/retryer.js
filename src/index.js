import Retryer from './Retryer';

export default function retry(promise, options) {
  const retryer = new Retryer(promise, options);

  return retryer.retry();
};
