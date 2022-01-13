const test = require('tape');
const isFunction = require('lodash.isfunction');

const cdf = require('../');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(cdf));
});

test('cdf', function(t) {
  t.plan(7);
  t.equal(cdf(52, 100, 1 / 2), 0.691350293205374);
  t.equal(cdf(0, 5, 1 / 4), 0.2373046875);
  t.equal(cdf(1, 5, 1 / 4), 0.6328125);
  t.equal(cdf(2, 5, 1 / 4), 0.896484375);
  t.equal(cdf(3, 5, 1 / 4), 0.984375);
  t.equal(cdf(4, 5, 1 / 4), 0.9990234375);
  t.equal(cdf(5, 5, 1 / 4), 1);
});
