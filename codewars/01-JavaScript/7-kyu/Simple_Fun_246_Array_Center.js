/**
 * Simple Fun #246: Array Center
 * https://www.codewars.com/kata/590bdaa251ab8267b800005b/train/javascript
 *
 */

const arrayCenter = a => {
  const min = Math.min(...a)
  const sum = a.reduce((acc, n) => acc + n, 0)
  const avg = sum / a.length

  return a.filter(n => Math.abs(n - avg) < min)
}
