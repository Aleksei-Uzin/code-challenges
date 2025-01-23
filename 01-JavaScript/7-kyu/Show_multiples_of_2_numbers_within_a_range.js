/**
 * Show multiples of 2 numbers within a range
 * https://www.codewars.com/kata/583989556754d6f4c700018e/train/javascript
 *
 */

const multiples = (s1, s2, s3) => {
  const res = []

  for (let i = 1; i < s3; i++) {
    if (i % s1 === 0 && i % s2 === 0) res.push(i)
  }

  return res
}
