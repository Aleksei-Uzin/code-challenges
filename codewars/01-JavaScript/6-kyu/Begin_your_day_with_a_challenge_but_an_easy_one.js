/**
 * Begin your day with a challenge, but an easy one
 * https://www.codewars.com/kata/5873b2010565844b9100026d/train/javascript
 *
 */

const oneTwoThree = n => {
  if (!n) return ['0', '0']

  const c = ~~(n / 9)

  return [`${'9'.repeat(c)}${n - c * 9 || ''}`, '1'.repeat(n)]
}
