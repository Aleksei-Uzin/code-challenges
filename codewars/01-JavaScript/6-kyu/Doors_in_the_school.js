/**
 * Doors in the school
 * https://www.codewars.com/kata/57c15d314677bb2bd4000017/train/javascript
 *
 */

const doors = n => {
  let res = [...Array(n)].fill(true)

  for (let i = 2; i <= n; i++) {
    for (let j = i - 1; j < n; j += i) {
      res[j] = !res[j]
    }
  }

  return res.filter(Boolean).length
}
