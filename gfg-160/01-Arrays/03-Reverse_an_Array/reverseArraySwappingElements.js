/**
 * Function to reverse an array by swapping elements.
 *
 * Time Complexity:
 *  - O(n), the loop runs through half of the array, so it's linear with respect to the array size.
 *
 * Auxiliary Space:
 *  - O(1), no extra space is required, therefore we are reversing the array in-place.
 *
 */

export function reverseArraySwappingElements(arr) {
  let n = arr.length

  for (let i = 0; i < n / 2; i++) {
    let temp = arr[i]
    arr[i] = arr[n - i - 1]
    arr[n - i - 1] = temp
  }
}
