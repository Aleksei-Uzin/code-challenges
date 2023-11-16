/**
 * CompoundArray
 * https://www.codewars.com/kata/56044de2aa75e28875000017/train/javascript
 *
 */

const compoundArray = (a, b) => {
  const lenA = a.length
  const lenB = b.length
  const maxLen = lenA > lenB ? lenA : lenB
  const res = []

  for (let i = 0; i < maxLen; i++) {
    res.push(a[i], b[i])
  }

  return res.filter(val => val !== undefined)
}
