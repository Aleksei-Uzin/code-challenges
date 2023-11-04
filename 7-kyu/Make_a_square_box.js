/**
 * Make a square box!
 * https://www.codewars.com/kata/58644e8ddf95f81a38001d8d/train/javascript
 *
 */

const box = n => {
  const solid = '-'.repeat(n)
  const midd = Array.from({ length: n - 2 }).fill(`-${' '.repeat(n - 2)}-`)

  return [solid, ...midd, solid]
}
