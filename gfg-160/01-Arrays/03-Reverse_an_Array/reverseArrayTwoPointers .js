/**
 * Function to reverse an array using Two Pointers.
 *
 * Time Complexity:
 *  - O(n), as we are visiting each element exactly once.
 *
 * Auxiliary Space:
 *  - O(1)
 *
 */

export function reverseArrayTwoPointers(arr) {
  let right = arr.length - 1
  let left = 0

  while (left < right) {
    ;[arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
  }
}
