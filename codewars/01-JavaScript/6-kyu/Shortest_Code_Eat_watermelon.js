/**
 * Shortest Code : Eat watermelon
 * https://www.codewars.com/kata/570db6dade4dc8966600051c/train/javascript
 *
 */

const sc = w => {
  const r = [0, 0, 0, 0]

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const k = (i < 4 ? 0 : 2) + ~~(j / 4)
      r[k] += w[i][j]
    }
  }

  return r.reduce((a, n) => (n > 5 ? a + n : a), 0)
}
