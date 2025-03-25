/**
 * Find the force of gravity between two objects
 * https://www.codewars.com/kata/5b609ebc8f47bd595e000627/train/javascript
 *
 */

const solution = ([m1, m2, dist], [u1, u2, u3]) => {
  const unitToKg = { kg: 1, g: 1e-3, mg: 1e-6, μg: 1e-9, lb: 0.453592 }
  const unitToM = { m: 1, cm: 1e-2, mm: 1e-3, μm: 1e-6, ft: 0.3048 }
  const G = 6.67e-11

  m1 = m1 * unitToKg[u1]
  m2 = m2 * unitToKg[u2]
  dist = dist * unitToM[u3]

  return (G * (m1 * m2)) / dist ** 2
}
