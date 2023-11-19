/**
 * Sectional Array Sort
 * https://www.codewars.com/kata/58ef87dc4db9b24c6c000092/train/javascript
 *
 */

const sectSort = (arr, start, len) => {
  const tail = len ? arr.splice(start + len) : []
  const head = arr.splice(0, start)
  const midd = arr.sort((a, b) => a - b)

  return head.concat(midd, tail)
}
