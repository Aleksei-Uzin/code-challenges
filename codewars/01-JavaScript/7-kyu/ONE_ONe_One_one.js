/**
 * ONE ONe One one
 * https://www.codewars.com/kata/588ac50727eb94c87700001f/train/javascript
 *
 */

const consecutiveOnes = nums => {
  let temp = 0
  let max = 0

  for (let n of nums) {
    if (n === 1) {
      max = Math.max(++temp, max)
    } else {
      temp = 0
    }
  }

  return max
}
