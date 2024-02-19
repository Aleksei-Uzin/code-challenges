/**
 * Array Array Array
 * https://www.codewars.com/kata/57eb936de1051801d500008a/train/javascript
 *
 */

const explode = ([a, b]) => {
  const getRes = (arr => n => new Array(n).fill(arr))([a, b])
  const isNumberA = typeof a === 'number'
  const isNumberB = typeof b === 'number'
  
  if(!isNumberA && !isNumberB) {
    return 'Void!'
  }
  
  if(isNumberA && isNumberB) {
    return getRes(a + b)
  }
  
  return isNumberA ? getRes(a) : getRes(b)
}
