/**
 * Short Long Short
 * https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript
 *
 */

const solution = (a, b) => a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`
