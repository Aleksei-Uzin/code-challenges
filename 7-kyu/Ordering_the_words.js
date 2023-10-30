/**
 * Ordering the words!
 * https://www.codewars.com/kata/55d7e5aa7b619a86ed000070/train/javascript
 *
 */

const orderWord = str =>
  str ? str.split('').sort().join('') : 'Invalid String!'
