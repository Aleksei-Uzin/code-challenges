/**
 * Using Sorting
 *
 * Time Complexity:
 *  - O(n*log(n)), as sorting the array takes O(n*log(n)) time and traversing the array can take O(n) time in the worst case,
 *    so total time complexity = (n*log(n) + n) = O(n*log(n)).
 *
 * Auxiliary space:
 *  - O(1), as no extra space is required.
 *
 */

export function getSecondLargestSorting(arr) {
  arr.sore((a, b) => a - b)
  let n = arr.length

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] !== arr[n - 1]) return arr[i]
  }

  return -1
}
