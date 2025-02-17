/**
 * Merge two arrays
 * https://www.codewars.com/kata/583af10620dda4da270000c5/train/javascript
 *
 */

const mergeArrays = (a, b) => {
  const maxLen = Math.max(a.length, b.length)
  const res = []

  for (let i = 0; i < maxLen; i++) {
    if (i in a) res.push(a[i])
    if (i in b) res.push(b[i])
  }

  return res
}
