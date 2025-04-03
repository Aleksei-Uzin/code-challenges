/**
 * Using Temporary Array - O(n) Time and O(n) Space
 *
 * The idea is to create a temporary array of same size as the input array arr[].
 *  - First, copy all non-zero elements from arr[] to the temporary array.
 *  - Then, fill all the remaining positions in temporary array with 0.
 *  - Finally, copy all the elements from temporary array to arr[].
 *
 */

export function pushZerosToEndTemporaryArray(arr) {
  const len = arr.length
  const temp = new Array(n)
  let j = 0

  for (let i = 0; i < len; i++) {
    if (arr[i] !== 0) {
      temp[j++] = arr[i]
    }
  }

  while (j < n) {
    temp[j++] = 0
  }

  for (let i = 0; i < len; i++) {
    arr[i] = temp[i]
  }
}
