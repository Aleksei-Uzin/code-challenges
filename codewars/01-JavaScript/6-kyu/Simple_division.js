/**
 * Simple division
 * https://www.codewars.com/kata/59ec2d112332430ce9000005/train/javascript
 *
 */

const solve = (a, b) => {
  let divisor = 2

  while (b >= 2) {
    if (b % divisor === 0) {
      if (a % divisor !== 0) return false
      b = b / divisor
    } else {
      divisor++
    }
  }

  return true
}
