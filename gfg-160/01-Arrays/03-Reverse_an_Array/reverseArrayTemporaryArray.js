/**
 * Function to reverse an array using temporary array.
 *
 * Time Complexity:
 *  - O(n), Copying elements to a new array is a linear operation.
 *
 * Auxiliary Space:
 *  - O(n), as we are using an extra array to store the reversed array.
 *
 */

export function reverseArrayTemporaryArray(arr) {
  let n = arr.length
  const temp = new Array(n)

  for (let i = 0; i < n; i++) {
    temp[i] = arr[n - i - 1]
  }

  for (let i = 0; i < n; i++) {
    arr[i] = temp[i]
  }
}
