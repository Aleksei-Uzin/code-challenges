/**
 * Slice the middle of a list backwards
 * https://www.codewars.com/kata/5a043724ffe75fbab000009f/train/javascript
 *
 */

const reverseMiddle = arr => {
  const midd = ~~(arr.length / 2)
  const start = midd - 1
  const end = arr.length % 2 === 0 ? midd + 1 : midd + 2

  return arr.slice(start, end).reverse()
}
