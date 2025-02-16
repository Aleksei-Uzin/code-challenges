/**
 * Irreducible Sum of Rationals
 * https://www.codewars.com/kata/5517fcb0236c8826940003c9/train/javascript
 *
 */

const gcd = (a, b) => (b == 0 ? a : gcd(b, a % b))
const sumFracts = l => {
  if (!l.length) return null

  let [n1, n2] = l.reduce(([a1, a2], [b1, b2]) => {
    return [a1 * b2 + b1 * a2, a2 * b2]
  })

  const g = gcd(n1, n2)

  return Number.isInteger(n1 / n2) ? n1 / n2 : [n1 / g, n2 / g]
}
