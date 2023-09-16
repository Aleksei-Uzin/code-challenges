/**
 * Smart Sum
 * https://www.codewars.com/kata/5831200eb812b8016d000094/train/javascript
 *
 */

const smartSum = (...args) => args.flat(Infinity).reduce((acc, val) => acc + val, 0)
