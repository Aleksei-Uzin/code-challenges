/**
 * Shortest Code: Symmetric Sort
 * https://www.codewars.com/kata/57049a1946edc26dbc00074a/train/javascript
 *
 */

let sc = arr => {
  let a = []
  let r = []
  let s = arr.sort((a, b) => a - b)

  s.forEach((n, i) => (i % 2 ? r.unshift(n) : a.push(n)))

  return a.concat(r)
}
