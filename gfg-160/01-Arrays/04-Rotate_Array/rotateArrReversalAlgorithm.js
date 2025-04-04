/**
 * Function to left rotate the array by d positions using Reversal Algorithm
 *
 * The idea is based on the observation that if we left rotate the array by d positions,
 * the last (n - d) elements will be at the front and the first d elements will be at the end.
 *
 *  - Reverse the subarray containing the first d elements of the array.
 *  - Reverse the subarray containing the last (n - d) elements of the array.
 *  - Finally, reverse all the elements of the array.
 *
 * Time Complexity:
 *  - O(n), as we are visiting each element exactly twice.
 *
 * Auxiliary Space:
 *  - O(1)
 *
 */

export function rotateArrReversalAlgo(arr, d) {
  let n = arr.length
  d %= n

  reverse(arr, 0, d - 1)
  reverse(arr, d, n - 1)
  reverse(arr, 0, n - 1)
}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
  }
}
