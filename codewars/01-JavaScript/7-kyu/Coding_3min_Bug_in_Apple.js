/**
 * Coding 3min: Bug in Apple
 * https://www.codewars.com/kata/56fe97b3cc08ca00e4000dc9/train/javascript
 *
 */

const sc = apple => {
  for (let i = 0; i < apple.length; i++) {
    for (let j = 0; j < apple[0].length; j++) {
      if (apple[i][j] === 'B') return [i, j]
    }
  }

  return [0, 0]
}
