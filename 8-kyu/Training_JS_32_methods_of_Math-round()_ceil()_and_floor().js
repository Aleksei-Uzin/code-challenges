/**
 * Training JS #32: methods of Math---round() ceil() and floor()
 * https://www.codewars.com/kata/5732d3c9791aafb0e4001236/train/javascript
 *
 */

const roundIt = n => {
  const arr = n.toString().split('.')
  const len1 = arr[0].length
  const len2 = arr[1].length
  
  if(len1 < len2) return Math.ceil(n)
  
  if(len1 > len2) return Math.floor(n)
  
  return Math.round(n)
}
