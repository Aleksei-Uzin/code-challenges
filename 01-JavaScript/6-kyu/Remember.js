/**
 * Remember
 * https://www.codewars.com/kata/55a243393fb3e87021000198/train/javascript
 *
 */

const remember = str =>
  str
    .split('')
    .filter((val, i, arr) => arr.indexOf(val) !== i)
    .filter((val, i, arr) => arr.indexOf(val) === i)
