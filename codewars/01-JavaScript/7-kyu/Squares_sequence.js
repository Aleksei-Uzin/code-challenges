/**
 * Squares sequence
 * https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript
 *
 */

const squares = (x, n) => (n <= 0 ? [] : [x, ...squares(x ** 2, n - 1)])
