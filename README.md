# binomial-cdf

Binomial cumulative distribution function.

## Example

``` javascript
var cdf = require('binomial-cdf');

cdf(52, 100, 0.5);
// => 0.69
```

## Installation

``` bash
$ npm install binomial-cdf
```

## API

``` javascript
var cdf = require('binomial-cdf');
```

### `cdf(k, n, p)`

Returns the probability of having **at most** _Number_ `k` successes in _Number_
`n` trials, given that the probability of a success is _Number_ `p`.