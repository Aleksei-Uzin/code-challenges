/**
 * Function moves all zeros to end using one traversal
 *
 * Time Complexity:
 *  - O(n), as we are traversing the array only once.
 *
 * Auxiliary Space:
 *  - O(1)
 *
 */

export function pushZerosToEndOneTraversal(arr) {
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      ;[arr[i], arr[count]] = [arr[count], arr[i]]
      count++
    }
  }
}
