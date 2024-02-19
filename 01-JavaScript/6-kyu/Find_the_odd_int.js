/**
 * Find the odd int
 * https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
 *
 */

const findOdd = arr => {
  const obj = {}
  
  arr.forEach(x => { (x in obj) ? obj[x] += 1 : obj[x] = 1 })
  
  const keys = Object.keys(obj)
  
  return +keys.find(key => obj[key] % 2)
}
