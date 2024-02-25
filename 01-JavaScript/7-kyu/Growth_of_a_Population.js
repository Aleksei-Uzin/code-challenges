/**
 * Growth of a Population
 * https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
 *
 */

const nbYear = (p0, percent, aug, p) => {
  let res = 0

  while (p0 < p) {
    p0 += ~~(p0 * (percent / 100) + aug)
    res += 1
  }

  return res
}
