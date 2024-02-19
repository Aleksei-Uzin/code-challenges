/**
 * Inspiring Strings
 * https://www.codewars.com/kata/5939ab6eed348a945f0007b2/train/javascript
 *
 */

const longestWord = str =>
  str.split(' ').reduce((acc, val) => (acc.length > val.length ? acc : val))
