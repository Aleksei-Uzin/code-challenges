/**
 * What dominates your array?
 * https://www.codewars.com/kata/559e10e2e162b69f750000b4/train/javascript
 *
 */

const dominator = arr => {
  const obj = {}
  const val = arr.length / 2
  let res = -1
  
  arr.forEach(x => {
    !obj[x] ? obj[x] = 1 : obj[x] += 1

    if(obj[x] > val) {
      res = x
    }
  })
  
  return res
}
