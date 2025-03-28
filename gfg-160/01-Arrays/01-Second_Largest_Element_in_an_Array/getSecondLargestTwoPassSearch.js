/**
 * 2 - Two Pass Search
 *
 * Time Complexity:
 *  - O(2*n) = O(n), as we are traversing the array two times.
 *
 * Auxiliary space:
 *  - O(1), as no extra space is required.
 *
 */

function getSecondLargestTwoPassSearch(arr) {
  const largest = Math.max(...arr)
  let secondLargest = -1

  for (let n of arr) {
    if (n !== largest && n > secondLargest) secondLargest = n
  }

  return secondLargest
}
