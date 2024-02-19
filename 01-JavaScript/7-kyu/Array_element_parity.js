/**
 * Array element parity
 * https://www.codewars.com/kata/5a092d9e46d843b9db000064/train/javascript
 *
 */

const solve = arr => [...new Set(arr)].reduce((acc, val) => acc + val, 0)
