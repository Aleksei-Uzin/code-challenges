/**
 * Integer depth
 * https://www.codewars.com/kata/59b401e24f98a813f9000026/train/javascript
 *
 */

const computeDepth = x => {
  const digits = new Set()
  let n = 0

  while (digits.size < 10) {
    ;[...String(++n * x)].forEach(item => digits.add(item))
  }

  return n
}
