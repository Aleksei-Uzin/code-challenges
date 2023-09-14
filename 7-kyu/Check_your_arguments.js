/**
 * Check your arguments
 * https://www.codewars.com/kata/58dd98fe8d29b0f30d0002bd/train/javascript
 *
 */

const objectType = (...args) => Object.prototype.toString.call(args.length ? args[0] : null)
