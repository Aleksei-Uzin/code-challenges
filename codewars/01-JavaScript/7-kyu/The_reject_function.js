/**
 * The reject() function
 * https://www.codewars.com/kata/52988f3f7edba9839c00037d/train/javascript
 *
 */

const reject = (arr, predicate) => arr.filter(n => !predicate(n))
