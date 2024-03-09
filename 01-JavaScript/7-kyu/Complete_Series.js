/**
 * Complete Series
 * https://www.codewars.com/kata/580a4001d6df740d61000301/train/javascript
 *
 */

const completeSeries = arr => {
  const isUnique = arr.every((n, i) => arr.indexOf(n) === i)

  return isUnique ? [...Array(Math.max(...arr) + 1)].map((_, i) => i) : [0]
}
