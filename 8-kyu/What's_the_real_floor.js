/**
 * What's the real floor?
 * https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
 *
 */

const getRealFloor = n => {
  if(n <= 0) return n
  
  if(n < 14) return n - 1
  
  return n - 2
}
