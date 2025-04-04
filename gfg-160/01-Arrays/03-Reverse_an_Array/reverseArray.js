/**
 * Function to reverse the array.
 * My solution
 *
 */

export function reverseArray(arr) {
  for (let i = 0, l = arr.length; i < l; i++, l--) {
    ;[arr[i], arr[l - 1]] = [arr[l - 1], arr[i]]
  }
}
