/**
 * Simple Fun #180: Repeat Adjacent
 * https://www.codewars.com/kata/58b8dccecf49e57a5a00000e/train/javascript
 *
 */

const repeatAdjacent = s => {
  const arr = s.match(/(?:(.)\1+)+/g) || []
  const filtredArr = arr.filter(val => new RegExp(`[^${val[0]}]`).test(val))

  return filtredArr.length
}
