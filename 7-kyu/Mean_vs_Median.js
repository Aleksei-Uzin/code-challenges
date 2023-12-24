/**
 * Mean vs. Median
 * https://www.codewars.com/kata/5806445c3f1f9c2f72000031/train/javascript
 *
 */

const meanVsMedian = numbers => {
  const len = numbers.length
  const median = numbers.sort((a, b) => a - b)[~~(len / 2)]
  const avg = numbers.reduce((sum, n) => sum + n, 0) / len

  if (avg === median) return 'same'

  return avg >= median ? 'mean' : 'median'
}
