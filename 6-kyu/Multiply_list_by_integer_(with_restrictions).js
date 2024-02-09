/**
 * Multiply list by integer (with restrictions)
 * https://www.codewars.com/kata/57f7e7617a28db2a2200021a/train/javascript
 *
 */

const multiply = (n, l) => {
  return l.map(num => {
    if (num === 0 && n < 0) return -0

    return n > 0 ? mult(num, Math.abs(n)) : -mult(num, Math.abs(n))
  })
}
const mult = (num, c) => {
  let res = 0

  while (c > 0) {
    res += num
    c--
  }

  return res
}

// Best practice
//
// function multiply(n, l) {
//   return l.map(a => Math.round(a / (1 / n)));
// }
