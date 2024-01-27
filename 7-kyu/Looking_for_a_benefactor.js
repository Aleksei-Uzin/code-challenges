/**
 * Looking for a benefactor
 * https://www.codewars.com/kata/569b5cec755dd3534d00000f/train/javascript
 *
 */

const newAvg = (arr, newavg) => {
  const sum = arr.reduce((acc, n) => acc + n, 0)
  const len = arr.length
  const currAvg = Math.round(sum / len)

  if (newavg < currAvg) throw new Error('Expected New Average is too low')

  return Math.ceil(newavg * (len + 1) - sum)
}
