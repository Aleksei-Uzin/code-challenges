/**
 * Find the anonymous function
 * https://www.codewars.com/kata/55a12bb8f0fac1ba340000aa/train/javascript
 *
 */

const FindFunction = (func, arr) => {
  const filterFn = func.find(val => typeof val === 'function')

  return arr.filter(filterFn)
}
