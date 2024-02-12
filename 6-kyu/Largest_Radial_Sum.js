/**
 * Largest Radial Sum
 * https://www.codewars.com/kata/64edf7ab2b610b16c2067579/train/javascript
 *
 */

const largestRadialSum = (arr, d) => {
  const diff = arr.length / d
  const acc = Array.from({ length: diff }).fill(0)
  const sum = arr.reduce((acc, n, i) => ((acc[i % diff] += n), acc), acc)

  return Math.max(...sum)
}
