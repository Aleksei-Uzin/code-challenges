/**
 * Centroid I
 * https://www.codewars.com/kata/58811e9cfd05cb5aed0000a4/train/javascript
 *
 */

const centroid = c => {
  const res = [0, 0, 0]

  for (let arr of c) {
    arr.forEach((n, i) => {
      res[i] += n
    })
  }

  return res.map(n => Math.round((n / c.length) * 100) / 100)
}
