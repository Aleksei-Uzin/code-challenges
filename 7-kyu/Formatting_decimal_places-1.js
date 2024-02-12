/**
 * Formatting decimal places #1
 * https://www.codewars.com/kata/5641c3f809bf31f008000042/train/javascript
 *
 */

const twoDecimalPlaces = number => {
  const [a, b] = number.toString().split('.')

  return Number.parseFloat(`${a}.${b.slice(0, 2)}`)
}

// Best practice
//
// const twoDecimalPlaces = number => Math.trunc(number * 100) / 100
