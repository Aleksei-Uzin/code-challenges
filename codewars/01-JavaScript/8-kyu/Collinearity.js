/**
 * Collinearity
 * https://www.codewars.com/kata/65ba420888906c1f86e1e680/train/javascript
 *
 */

const collinearity = (x1, y1, x2, y2) => {
  const pq1 = x1 / x2
  const pq2 = y1 / y2

  if (Number.isNaN(pq1) || Number.isNaN(pq2)) return true
  if (!Number.isFinite(pq1) && !Number.isFinite(pq2)) return true

  return pq1 === pq2
}

// Best Practice
//
// function collinearity(x1, y1, x2, y2) {
//   return x1 * y2 === y1 * x2
// }
