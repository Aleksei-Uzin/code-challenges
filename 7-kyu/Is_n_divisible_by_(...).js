/**
 * Is n divisible by (...)?
 * https://www.codewars.com/kata/558ee8415872565824000007/train/javascript
 *
 */

const isDivisible = (n, ...rest) => !rest.some(x => n % x)
