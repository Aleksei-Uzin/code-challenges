/**
 * Onion array
 * https://www.codewars.com/kata/59b2883c5e2308b54d000013/train/javascript
 *
 */

const isOnionArray = arr => {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] + arr[j] > 10) return false
  }

  return true
}
