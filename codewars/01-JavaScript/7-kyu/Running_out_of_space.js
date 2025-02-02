/**
 * Running out of space
 * https://www.codewars.com/kata/56576f82ab83ee8268000059/train/javascript
 *
 */

const spacey = arr => {
  let res = arr[0]
  
  return arr.map((x, i) => {
    i ? res += arr[i] : res
    
    return x = res
  })
}
