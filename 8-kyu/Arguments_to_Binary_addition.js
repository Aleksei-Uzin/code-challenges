/**
 * Arguments to Binary addition
 * https://www.codewars.com/kata/57642a90dee2da8dd3000161/train/javascript
 *
 */

const arr2bin = arr => arr
  .map(x => typeof x === 'number' ? x : 0)
  .reduce((a, b) => a + b, 0)
  .toString(2)
