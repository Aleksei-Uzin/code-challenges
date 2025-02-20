/**
 * Hollow array
 * https://www.codewars.com/kata/59b72376460387017e000062/train/javascript
 *
 */

const isHollow = x => {
  if (x.length < 3) return false

  const isValid = x.every(n => n === 0)

  if (isValid) return true

  const n1 = x[0]
  const n2 = x[x.length - 1]

  if (
    (n1 === 0 && n2 !== 0) ||
    (n1 !== 0 && n2 === 0) ||
    (n1 === 0 && n2 === 0 && !isValid)
  )
    return false

  return isHollow(x.slice(1, -1))
}
