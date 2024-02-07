/**
 * Math Issues
 * https://www.codewars.com/kata/5267faf57526ea542e0007fb/train/javascript
 *
 */

Math.round = n => +n.toFixed()
Math.ceil = n => (Number.isInteger(n) ? n : Math.floor(n) + 1)
Math.floor = n => ~~n
