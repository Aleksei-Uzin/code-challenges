/**
 * Inertial Array
 * https://www.codewars.com/kata/59a151c53f64cdd94c00008f/train/javascript
 *
 */

/*
  function name:- isInertial
  input:- integer array
  ouput:- true if array is inertial false otherwise.
*/

const isInertial = a => {
  const sorted = [...a].sort((a, b) => b - a)

  if (sorted[0] % 2 !== 0) return false

  const [maxEven, minOdd] = sorted.reduce(
    ([evn, odd], n) => {
      if (n % 2 === 0 && n !== sorted[0] && n > evn) return [n, odd]
      else if (n % 2 !== 0 && n < odd) return [evn, n]
      else return [evn, odd]
    },
    [-Infinity, Infinity]
  )

  return isFinite(minOdd) && minOdd > maxEven
}
