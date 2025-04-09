/**
 * Function to rotate an array by d elements in counter-clockwise direction.
 *
 * Time Complexity:
 *  - O(n!*n*log(n!)), n represents the number of elements present in the input sequence represent all possible permutation.
 *
 * Auxiliary Space:
 *  - O(n!), for storing the permutations
 *
 * My solution
 *
 */

export function nextPermutation(arr) {
  const len = arr.length
  let i = len - 2,
    j = len - 1

  // Step 1: Find pivot (rightmost element smaller than its next)
  for (i; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) break
  }

  // Step 2: Find the rightmost element greater than arr[i]
  if (i >= 0) {
    for (j; j >= 0; j--) {
      if (arr[j] > arr[i]) break
    }
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }

  // Step 3: Reverse the suffix
  let left = i + 1,
    right = len - 1

  while (left < right) {
    ;[arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
  }
}
