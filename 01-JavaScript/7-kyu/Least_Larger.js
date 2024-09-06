/**
 * Least Larger
 * https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4/train/javascript
 *
 */

const leastLarger = (a, i) => {
  let [resInd, resN] = [-1, Infinity]

  for (let [ind, n] of Object.entries(a)) {
    if (n > a[i] && n < resN) {
      ;[resInd, resN] = [parseInt(ind), n]
    }
  }

  return resInd
}
