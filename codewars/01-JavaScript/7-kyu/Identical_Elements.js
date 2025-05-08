/**
 * Identical Elements
 * https://www.codewars.com/kata/583ebb9328a0c034490001ba/train/javascript
 *
 */

const duplicateElements = (m, n) => {
  const len = Math.min(m.length, n.length)

  for (let i = 0; i < len; i++) {
    if (m.includes(n[i])) return true
  }

  return false
}
