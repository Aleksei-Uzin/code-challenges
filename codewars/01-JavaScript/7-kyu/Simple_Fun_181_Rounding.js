/**
 * Simple Fun #181: Rounding
 * https://www.codewars.com/kata/58bccdf56f25ff6b6d00002f/train/javascript
 *
 */

const rounding = (n, m) => {
  const lowerMult = Math.floor(n / m) * m
  const upperMult = Math.ceil(n / m) * m
  const lowerDist = Math.abs(n - lowerMult)
  const upperDist = Math.abs(n - upperMult)

  if (lowerDist === upperDist) {
    return n
  }

  return lowerDist < upperDist ? lowerMult : upperMult
}
