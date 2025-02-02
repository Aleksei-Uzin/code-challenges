/**
 * Capitals first!
 * https://www.codewars.com/kata/55c353487fe3cc80660001d4/train/javascript
 *
 */

const capitalsFirst = str => {
  const lower = [],
    upper = []

  str.split(" ").forEach(val => {
    if (/[a-z]/.test(val[0])) lower.push(val)
    if (/[A-Z]/.test(val[0])) upper.push(val)
  })

  return [...upper, ...lower].join(" ")
}
