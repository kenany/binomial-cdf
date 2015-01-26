var binomial = require('choose');

function cdf(k, n, p) {
  var k = Math.floor(k);

  var sum = 0;

  for (var i = 0; i <= k; i++) {
    sum += binomial(n, i) * Math.pow(p, i) * Math.pow(1 - p, n - i);
  }

  return sum;
}

module.exports = cdf;