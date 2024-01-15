/**
 * Leonardo numbers
 * https://www.codewars.com/kata/5b2117eea454c89d4400005f/train/javascript
 *
 */

const L = (n, L0, L1, add) => {
  const res = [L0, L1]

  for (let i = 2; i < n; i++) {
    res[i] = res[i - 1] + res[i - 2] + add
  }

  return res
}
