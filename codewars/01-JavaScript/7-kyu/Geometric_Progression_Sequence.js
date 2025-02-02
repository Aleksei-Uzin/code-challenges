/**
 * Geometric Progression Sequence
 * https://www.codewars.com/kata/55caef80d691f65cb6000040/train/javascript
 *
 */

const geometricSequenceElements = (a, r, n) => {
  const res = []

  for (let i = a; res.length < n; i *= r) {
    res.push(i)
  }

  return res.join(', ')
}
