/**
 * Split all even numbers to odd ones in different ways
 * https://www.codewars.com/kata/5883b79101b769456e000003/train/javascript
 *
 */

const closestOdd = n => {
  const closestOne = (n / 2) | 1
  return [n - closestOne, closestOne]
}
const makeOddArr = (length, n = 1) => Array.from({ length }, () => n)
const maxOddNumber = n => (n % 2 ? n : maxOddNumber(n / 2))

const splitAllEvenNumbers = (numbers, way) => {
  const res = []

  for (let n of numbers) {
    if (n % 2 === 0) {
      if (way === 0) {
        res.push(...closestOdd(n))
      } else if (way === 1) {
        res.push(1, n - 1)
      } else if (way === 2) {
        const maxOdd = maxOddNumber(n)
        res.push(...makeOddArr(n / maxOdd, maxOdd))
      } else {
        res.push(...makeOddArr(n))
      }
    } else {
      res.push(n)
    }
  }

  return res
}
