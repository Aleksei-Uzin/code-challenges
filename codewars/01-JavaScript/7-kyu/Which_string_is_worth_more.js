/**
 * Which string is worth more?
 * https://www.codewars.com/kata/5840586b5225616069000001/train/javascript
 *
 */

const highestValue = (a, b) => {
  const [sumA, sumB] = [a, b].map(s =>
    [...s].reduce((acc, c) => acc + c.charCodeAt(), 0)
  )

  return sumA >= sumB ? a : b
}
