/**
 * Negative Connotation
 * https://www.codewars.com/kata/5ef0456fcd067000321baffa/train/javascript
 *
 */

const connotation = str => {
  const res = str
    .trim()
    .split(/\s+/)
    .reduce((acc, w) => (/[a-m]/i.test(w[0]) ? acc + 1 : acc - 1), 0)

  return res >= 0
}
