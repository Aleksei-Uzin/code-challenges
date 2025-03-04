/**
 * Coding 3min : Eat watermelon
 * https://www.codewars.com/kata/570df12ce6e9282a7d000947/train/javascript
 *
 */

const sc = watermelon => {
  const res = [0, 0, 0, 0]

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const k = (i < 4 ? 0 : 2) + ~~(j / 4)
      res[k] += watermelon[i][j]
    }
  }

  return res.reduce((acc, n) => (n > 5 ? acc + n : acc), 0)
}
