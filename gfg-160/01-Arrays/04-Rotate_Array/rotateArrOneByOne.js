/**
 * Function to left rotate the array by d positions by rotating one element at a time
 *
 * Time Complexity:
 *  - O(n*d), the outer loop runs d times, and within each iteration,
 *    the inner loop shifts all n elements of the array by one position,
 *    resulting in a total of n * d operations.
 *
 * Auxiliary Space:
 *  - O(1)
 *
 */

export function rotateArrOneByOne(arr, d) {
  const n = arr.length

  for (let i = 0; i < d; i++) {
    let first = arr[0]

    for (let j = 0; j < n - 1; j++) {
      arr[j] = arr[j + 1]
    }

    arr[n - 1] = first
  }
}
