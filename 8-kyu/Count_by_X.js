/**
 * Count by X
 * https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
 *
 */

function countBy(x, n) {
  let res = []
  
  for(let i = x; i <= x * n; i += x) {
    res.push(i)
  }

  return res
}
