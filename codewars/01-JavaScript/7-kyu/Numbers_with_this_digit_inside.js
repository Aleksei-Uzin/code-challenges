/**
 * Numbers with this digit inside
 * https://www.codewars.com/kata/57ad85bb7cb1f3ae7c000039/train/javascript
 *
 */

const numbersWithDigitInside = (x, d) => {
  const res = [0, 0, 0]

  for (let i = 1; i <= x; i++) {
    if (`${i}`.includes(d)) {
      res[0] += 1
      res[1] += i
      res[2] = (res[2] || 1) * i
    }
  }

  return res
}
