/**
 * Write shortest function to calculate Average number of Array
 * https://www.codewars.com/kata/56c22cdbe0c0f7cae2001789/train/javascript
 *
 */

let avg = a => a.reduce((s, n) => s + n, 0) / a.length
