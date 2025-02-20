/**
 * Portion of Array
 * https://www.codewars.com/kata/598e3859f289bb47ba00000a/train/javascript
 *
 */

const portion = (a, i, n) => {
  let ind = i < 0 ? a.length - n + i : i
  const res = []

  while (res.length < n) {
    if (ind in a) {
      res.push(a[ind])
      ind++
    } else {
      return -1
    }
  }

  return res
}
