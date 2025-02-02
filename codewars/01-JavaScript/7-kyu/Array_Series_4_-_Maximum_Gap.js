/**
 * Maximum Gap (Array Series #4)
 * https://www.codewars.com/kata/5a7893ef0025e9eb50000013/train/javascript
 *
 */

const maxGap = numbers =>
  numbers
    .sort((a, b) => a - b)
    .reduce(
      (acc, val, i, arr) => (arr[i + 1] - val > acc ? arr[i + 1] - val : acc),
      0
    )
