/**
 * Mean Square Error
 * https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript
 *
 */

const solution = (firstArray, secondArray) => {
  const len = firstArray.length
  let sum = 0

  for (let i = 0; i < len; i++) {
    const a = firstArray[i]
    const b = secondArray[i]
    sum += Math.abs(a - b) ** 2
  }

  return sum / len
}
