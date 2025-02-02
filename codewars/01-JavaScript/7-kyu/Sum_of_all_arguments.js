/**
 * Sum of all arguments
 * https://www.codewars.com/kata/540c33513b6532cd58000259/train/javascript
 *
 */

const sum = (...args) => args.reduce((acc, n) => acc + n)
