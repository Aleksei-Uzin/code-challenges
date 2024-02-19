/**
 * Unpacking Arguments
 * https://www.codewars.com/kata/540de1f0716ab384b4000828/train/javascript
 *
 */

function spread_a(func, args) {
  return func.apply(null, args)
}

const spread_b = (func, args) => func(...args)
