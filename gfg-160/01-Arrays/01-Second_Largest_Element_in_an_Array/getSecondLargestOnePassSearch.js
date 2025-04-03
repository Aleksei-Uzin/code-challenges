/**
 * One Pass Search
 *
 * Time Complexity:
 *  - O(n), as we are traversing the array only once.
 *
 * Auxiliary space:
 *  - O(1)
 *
 */

export function getSecondLargestOnePassSearch(arr) {
  let largest = -1
  let secondLargest = -1

  for (let n of arr) {
    if (n > largest) {
      secondLargest = largest
      largest = n
    } else if (n < largest && n > secondLargest) {
      secondLargest = n
    }
  }

  return secondLargest
}
