/**
 * Function to reverse an array using Recursion.
 *
 * Time Complexity:
 *  - O(n), the recurrence relation will be T(n) = T(n - 2) + O(1), which can be simplified to O(n).
 *
 * Auxiliary Space:
 *  - O(n), as we are using recursion stack.
 *
 */

function reverseArrayRec(arr, l, r) {
  if (l >= r) return
  ;[arr[l], arr[r]] = [arr[r], arr[l]]

  reverseArrayRec(arr, l + 1, r - 1)
}

export function reverseArray(arr) {
  let n = arr.length
  reverseArrayRec(arr, 0, n - 1)
}
