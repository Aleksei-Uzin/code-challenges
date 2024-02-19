/**
 * Map function issue
 * https://www.codewars.com/kata/560fbc2d636966b21e00009e/train/javascript
 *
 */

const func = item => !(item % 2)

const map = (arr, callback) => {
  const isFunction = typeof callback !== 'function'
  const isArrOfNumbers = arr.some(n => isNaN(Number(n)))
  
  if(isFunction) return 'given argument is not a function'
  if(isArrOfNumbers) return 'array should contain only numbers'
  
  return arr.map(callback)
}
