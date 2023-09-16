/**
 * Filter Coffee
 * https://www.codewars.com/kata/56069d0c4af7f633910000d3/train/javascript
 *
 */

const search = (budget, prices) =>
  prices
    .filter((n) => n <= budget)
    .sort((a, b) => a - b)
    .join(',');
