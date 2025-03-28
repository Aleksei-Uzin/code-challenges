/**
 * Function returns the second largest element
 * My solution
 *
 */

export function getSecondLargest(arr) {
  const sorted = [...arr].sort((a, b) => b - a)
  let secondLargest = sorted[0]

  for (let n of sorted) {
    if (n < secondLargest) return n
  }

  return -1
}
