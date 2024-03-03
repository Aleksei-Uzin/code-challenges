/**
 * Array Product (Sans n)
 * https://www.codewars.com/kata/5b3e609cd58499284100007a/train/javascript
 *
 */

const productSansN = nums => {
  const prod = nums.reduce((acc, n) => (n ? acc * BigInt(n) : acc), 1n)
  const ind1 = nums.indexOf(0)
  const ind2 = nums.lastIndexOf(0)

  if (ind1 !== -1 && ind1 === ind2) return nums.map(n => (!n ? prod : 0))
  else if (ind1 === -1 && ind2 === -1) return nums.map(n => prod / BigInt(n))
  else return nums.map(() => 0)
}
