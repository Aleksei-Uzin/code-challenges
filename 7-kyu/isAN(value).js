/**
 * isAN(value)
 * https://www.codewars.com/kata/534d80775371ece88d0010b5/train/javascript
 *
 */

const isAN = value =>
  value instanceof Number
    ? Number.isInteger(parseInt(value.toString()))
    : Number.isInteger(value)
