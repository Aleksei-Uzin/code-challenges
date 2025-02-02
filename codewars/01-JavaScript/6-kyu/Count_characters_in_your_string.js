/**
 * Count characters in your string
 * https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
 *
 */

const count = str => {
  const res = {}
  
  str.split('').forEach(x => { !res[x] ? res[x] = 1 : res[x] += 1 })
  
  return res
}
