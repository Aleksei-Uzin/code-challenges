/**
 * Evens times last
 * https://www.codewars.com/kata/5a1a9e5032b8b98477000004/train/javascript
 *
 */

const evenLast = nums => {
  const last = nums.slice(-1)
  let res = 0

  nums.forEach((num, i) => {
    if (i % 2 === 0) {
      res += num * last
    }
  })

  return res
}
