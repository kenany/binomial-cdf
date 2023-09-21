'use strict';

const binomial = require('choose');

/**
 * @param {number} k
 * @param {number} n
 * @param {number} p
 * @returns {number}
 */
function cdf(k, n, p) {
  k = Math.floor(k);

  let sum = 0;

  for (let i = 0; i <= k; i++) {
    sum += binomial(n, i) * Math.pow(p, i) * Math.pow(1 - p, n - i);
  }

  return sum;
}

module.exports = cdf;
