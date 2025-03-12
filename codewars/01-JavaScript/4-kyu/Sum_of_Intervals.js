/**
 * Sum of Intervals
 * https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript
 *
 */

const sumIntervals = intervals => {
  const sorted = [...intervals].sort((a, b) => a[0] - b[0])
  let prev = sorted[0]
  let totalSum = 0

  for (let i = 1; i < intervals.length; i++) {
    const curr = sorted[i]

    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1])
    } else {
      totalSum += prev[1] - prev[0]
      prev = curr
    }
  }

  totalSum += prev[1] - prev[0]

  return totalSum
}
