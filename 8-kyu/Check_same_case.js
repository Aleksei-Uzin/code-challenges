/**
 * Check same case
 * https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript
 *
 */

const sameCase = (a, b) => {
  const regexp = /^[a-zA-Z]$/
  if(!regexp.test(a) || !regexp.test(b)) return -1
  
  const isAUpperCase = a.toUpperCase() === a
  const isBUpperCase = b.toUpperCase() === b
  
  return isAUpperCase === isBUpperCase ? 1 : 0
}
