/**
 * Dominant array elements
 * https://www.codewars.com/kata/5a04133e32b8b998dc000089/train/javascript
 *
 */

const solve = arr => {
  const res = []

  arr.reduceRight((acc, val) => (val > acc ? (res.unshift(val), val) : acc), 0)

  return res
}
