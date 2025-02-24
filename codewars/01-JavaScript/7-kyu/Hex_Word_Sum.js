/**
 * Hex Word Sum
 * https://www.codewars.com/kata/5c46ea433dd41b19af1ca3b3/train/javascript
 *
 */

const hexWordSum = str => {
  const arr = str.replace(/O/g, 0).replace(/S/g, 5).split(' ')
  let sum = 0

  for (let word of arr) {
    sum += /^[0-9A-F]+$/i.test(word) ? parseInt(word, 16) : 0
  }

  return sum
}
