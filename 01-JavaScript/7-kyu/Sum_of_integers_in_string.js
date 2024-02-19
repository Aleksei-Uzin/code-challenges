/**
 * Sum of integers in string
 * https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript
 *
 */

const sumOfIntegersInString = s => {
  const nums = s.match(/\d+/g)

  return nums ? nums.reduce((acc, val) => acc + parseInt(val), 0) : 0
}
