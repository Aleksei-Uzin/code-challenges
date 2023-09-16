/**
 * max diff - easy
 * https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript
 *
 */

const maxDiff = list => {
  if(!list.length) {
    return 0
  }

  const max = Math.max(...list)
  const min = Math.min(...list)
  
  return max - min
}
