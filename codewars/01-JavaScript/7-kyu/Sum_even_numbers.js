/**
 * Sum even numbers
 * https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript
 *
 */

const sumEvenNumbers = input =>
  input.reduce(
    (acc, val) => (Number.isInteger(val) && val % 2 === 0 ? acc + val : acc),
    0
  )
