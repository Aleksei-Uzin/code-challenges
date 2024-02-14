/**
 * Nothing special
 * https://www.codewars.com/kata/57029e77005264a3b9000eb5/train/javascript
 *
 */

const nothingSpecial = str =>
  typeof str === 'string' ? str.replace(/[^\w\s]|\_/g, '') : 'Not a string!'
