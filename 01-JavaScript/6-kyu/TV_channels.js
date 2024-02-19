/**
 * TV channels
 * https://www.codewars.com/kata/5836dce6966f8d1d43000007/train/javascript
 *
 */

const redarr = arr =>
  arr
    .filter((val, i) => arr.indexOf(val) === i)
    .sort()
    .reduce((obj, val, i) => ((obj[i] = val), obj), {})
