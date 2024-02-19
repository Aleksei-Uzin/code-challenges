/**
 * Arithmetic List!
 * https://www.codewars.com/kata/541da001259d9ca85d000688/train/javascript
 *
 */

const seqlist = (first, c, l) => {
  const arr = []

  for (let i = 0; i < l; i++) {
    arr.push(first)
    first += c
  }

  return arr
}
