/**
 * Fast Fibonacci
 * https://www.codewars.com/kata/557226cd3554219bdf00019b/train/javascript
 *
 */

const fib = (n, index = 1, res = 0) => n ? fib(n - 1, index + res, index) : res
