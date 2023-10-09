/**
 * Factorial
 * https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript
 *
 */

const factorial = n => (n === 0 ? 1 : factorial(n - 1) * n)
