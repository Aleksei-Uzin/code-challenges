/**
 * zipWith
 * https://www.codewars.com/kata/5825792ada030e9601000782/train/javascript
 *
 */

const zipWith = (fn, a0, a1) => {
  const res = []
  
  a0.forEach((x, i) => {
    if(a1[i] !== undefined) {
      res.push(fn(x, a1[i]))
    }
  })
  
  return res
}
