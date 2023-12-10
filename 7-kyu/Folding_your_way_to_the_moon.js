/**
 * Folding your way to the moon
 * https://www.codewars.com/kata/58f0ba42e89aa6158400000e/train/javascript
 *
 */

const foldTo = distance => {
  let res = 0.0001
  let n = 0

  if (distance < 0) return null

  while (res < distance) {
    res *= 2
    n++
  }

  return n
}
