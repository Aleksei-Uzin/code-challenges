/**
 * Distance from the average
 * https://www.codewars.com/kata/568ff914fc7a40a18500005c/train/javascript
 *
 */

const distancesFromAverage = arr => {
  const avg = arr.reduce((acc, n) => acc + n) / arr.length

  return arr.map(val => Math.round((avg - val) * 100) / 100)
}
