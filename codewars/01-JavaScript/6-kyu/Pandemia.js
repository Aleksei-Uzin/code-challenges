/**
 * Pandemia
 * https://www.codewars.com/kata/5e2596a9ad937f002e510435/train/javascript
 *
 */

const infected = s => {
  const total = s.replace(/x/gi, '').length
  const infectedPop = (s.match(/(?=[0]*[1])[01]+/g) || []).reduce(
    (acc, s) => acc + s.length,
    0
  )

  return (100 * infectedPop) / total || 0
}
