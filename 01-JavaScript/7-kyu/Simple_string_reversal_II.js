/**
 * Simple string reversal II
 * https://www.codewars.com/kata/5a8d1c82373c2e099d0000ac/train/javascript
 *
 */

const solve = (st, a, b) => {
  let lastInd = b < st.length ? b : st.length - 1
  let res = ''

  for (let [ind, val] of Object.entries(st)) {
    if (ind < a || ind > b) {
      res += val
    } else {
      res += st[lastInd]
      lastInd -= 1
    }
  }

  return res
}
