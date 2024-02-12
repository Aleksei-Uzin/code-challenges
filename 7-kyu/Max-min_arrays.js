/**
 * Max-min arrays
 * https://www.codewars.com/kata/5a090c4e697598d0b9000004/train/javascript
 *
 */

const solve = arr => {
  const len = arr.length
  const res = []

  for (let i = 0; i < len; i++) {
    const max = i % 2 === 0 ? Math.max(...arr) : Math.min(...arr)
    const ind = arr.indexOf(max)
    arr.splice(ind, 1)
    res.push(max)
  }

  return res
}
