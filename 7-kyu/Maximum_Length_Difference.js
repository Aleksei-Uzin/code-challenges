/**
 * Maximum Length Difference
 * https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript
 *
 */

const mxdiflg = (a, b) => {
  if (a.length === 0 || b.length === 0) return -1

  const getLen = str => str.length
  const getMaxMin = ({ max, min }, n) => ({
    max: Math.max(max, n),
    min: Math.min(min, n),
  })

  const { max: maxA, min: minA } = a
    .map(getLen)
    .reduce(getMaxMin, { max: -Infinity, min: Infinity })
  const { max: maxB, min: minB } = b
    .map(getLen)
    .reduce(getMaxMin, { max: -Infinity, min: Infinity })

  return Math.max(maxA - minB, maxB - minA)
}
