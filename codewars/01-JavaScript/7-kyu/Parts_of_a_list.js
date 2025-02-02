/**
 * Parts of a list
 * https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript
 *
 */

const partlist = arr => {
  const res = []

  for (let i = 1; i < arr.length; i++) {
    res.push([arr.slice(0, i).join(' '), arr.slice(i).join(' ')])
  }

  return res
}
