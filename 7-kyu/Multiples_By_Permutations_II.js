/**
 * Multiples By Permutations II
 * https://www.codewars.com/kata/5ba178be875de960a6000187/train/javascript
 *
 */

const findLowestInt = k1 => {
  const getNum = (k, res) => [...(k * res).toString()].sort().join('')
  let k2 = k1 + 1,
    res = 1

  while (getNum(k1, res) !== getNum(k2, res)) {
    res += 1
  }

  return res
}
