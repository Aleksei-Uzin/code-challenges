/**
 * maxPossibleScore
 * https://www.codewars.com/kata/59656c69253c365e58000046/train/javascript
 *
 */

const maxPossibleScore = (obj, arr) => {
  const str = arr.join(',')
  let res = 0

  for (let [key, val] of Object.entries(obj)) {
    res += val * (str.includes(key) ? 2 : 1)
  }

  return res
}
