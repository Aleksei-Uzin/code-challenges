/**
 * Simple Fun #17: Rounders
 * https://www.codewars.com/kata/58846d50f54f021d90000012/train/javascript
 *
 */

const rounders = value => {
  let n = 0

  while (value > 10) {
    value = Math.round(value / 10)
    n++
  }

  return value * 10 ** n
}
