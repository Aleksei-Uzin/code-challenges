/**
 * Function to left rotate the array by d positions by rotating one element at a time
 *
 * Time Complexity:
 *  - O(n), as we are visiting each element only twice.
 *
 * Auxiliary Space:
 *  - O(n), as we are using an additional temporary array.
 *
 */

export function rotateArrTemporaryArr(arr, d) {
  const n = arr.length
  const temp = new Array(n)
  d %= n

  for (let i = 0; i < n - d; i++) {
    temp[i] = arr[d + i]
  }

  for (let i = 0; i < d; i++) {
    temp[n - d + i] = arr[i]
  }

  for (let i = 0; i < n; i++) {
    arr[i] = temp[i]
  }
}
