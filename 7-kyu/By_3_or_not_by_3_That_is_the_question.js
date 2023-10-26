/**
 * By 3, or not by 3? That is the question . . .
 * https://www.codewars.com/kata/59f7fc109f0e86d705000043/train/javascript
 *
 */

const divisibleByThree = str => {
  if (/\b[369]\b/.test(str)) return true
  else if (/\b[^369]\b/.test(str)) return false

  const sum = str.split('').reduce((acc, d) => +acc + +d)

  return divisibleByThree(sum.toString())
}
