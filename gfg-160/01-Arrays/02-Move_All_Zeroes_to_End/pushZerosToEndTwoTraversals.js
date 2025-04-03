/**
 * Function moves all zeros to end using two traversals
 *
 * Time Complexity:
 *  - O(n), as we are traversing the array only twice.
 *
 * Auxiliary Space:
 *  - O(1)
 *
 */

export function pushZerosToEndTwoTraversals(arr) {
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i]
    }
  }

  while (count < arr.length) {
    arr[count++] = 0
  }
}
