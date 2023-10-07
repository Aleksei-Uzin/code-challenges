/**
 * Minimum Steps
 * https://www.codewars.com/kata/5a91a7c5fd8c061367000002/train/javascript
 *
 */

const minimumSteps = (numbers, value) => {
  const sortedNums = numbers.sort((a, b) => a - b)
  let res = 0

  sortedNums.forEach(num => {
    value -= num
    if (value > 0) res++
  })

  return res
}
