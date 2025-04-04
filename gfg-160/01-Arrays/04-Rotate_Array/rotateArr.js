/**
 * Function to rotate an array by d elements in counter-clockwise direction.
 * My solution
 *
 */

export function rotateArr(arr, d) {
  const n = d % arr.length
  const temp = arr.splice(0, n)
  arr.push(...temp)
}
