/**
 * Simple Moon Rating
 * https://www.codewars.com/kata/5be8852935da89c5c8000157/train/javascript
 *
 */

const moonRating = rating => {
  const count = Math.round(rating) / 2
  const [on, cn] = `${count}`.split('.')

  return `${'o'.repeat(on)}${cn ? 'c' : ''}`.padEnd(5, 'x')
}
