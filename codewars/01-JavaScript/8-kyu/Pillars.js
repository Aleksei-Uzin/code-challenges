/**
 * Pillars
 * https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript
 *
 */

// A
const pillars = (num, dist, width) => {
  let res = num > 1 ? -width : 0
  
  for(let i = 1; i < num; i++) {
    res += dist * 100 + width
  }

  return res
}

// B
const _pillars = (numPill, dist, width) => {
  const num = numPill - 1
  
  return num > 1
    ? num * dist * 100 + (num - 1) * width
    : num * dist * 100
}
