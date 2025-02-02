/**
 * Maximum Contiguous Sum
 * https://www.codewars.com/kata/52f4261c95d6bff39a003096/train/javascript
 *
 */

const maxContiguousSum = arr => {
  let maxNum = 0
  let maxSum = 0

  arr.forEach(x => {
    maxNum = Math.max(x, x + maxNum)

    if (maxNum > maxSum) maxSum = maxNum
  })

  return maxSum
}
