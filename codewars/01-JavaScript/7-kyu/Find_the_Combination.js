/**
 * Find the Combination
 * https://www.codewars.com/kata/55c2a1ee7fe3ccfee5000058/train/javascript
 *
 */

const countCombinations = (str, key) =>
  (str.match(new RegExp(key, 'gi')) || []).length
