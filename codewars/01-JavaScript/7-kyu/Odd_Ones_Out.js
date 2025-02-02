/**
 * Odd Ones Out!
 * https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0/train/javascript
 *
 */

const oddOnesOut = nums => {
  const count = {}

  for (let elem of nums) {
    count[elem] ? (count[elem] += 1) : (count[elem] = 1)
  }

  return nums.filter(val => count[val] % 2 === 0)
}
