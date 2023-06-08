/**
 * String cleaning
 * https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/javascript
 *
 */

const stringClean = str => {
  const arr = str.match(/[\D]/g)
  
  return arr ? arr.join('') : ''
}
