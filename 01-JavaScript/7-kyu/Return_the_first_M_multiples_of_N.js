/**
 * Return the first M multiples of N
 * https://www.codewars.com/kata/593c9175933500f33400003e/train/javascript
 *
 */

const multiples = (m, n) => {
  const res = []

  for (let i = 1; i <= m; res.push(n * i++));

  return res
}
