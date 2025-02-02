/**
 * Sum of Two Integers
 * https://www.codewars.com/kata/5a9c35e9ba1bb5c54a0001ac/train/javascript
 *
 */

const add = (x, y) => {
  const result = x ^ y
  const carry = (x & y) << 1

  return carry !== 0 ? add(result, carry) : result
}
