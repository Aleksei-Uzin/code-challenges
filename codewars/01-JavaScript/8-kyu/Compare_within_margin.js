/**
 * Compare within margin
 * https://www.codewars.com/kata/56453a12fcee9a6c4700009c/train/javascript
 *
 */

function closeCompare(a, b, margin = 0){
  const isAClose = Math.abs(a - b) <= margin
  
  if(isAClose) return 0
  
  return (a < b) ? -1 : 1
}
