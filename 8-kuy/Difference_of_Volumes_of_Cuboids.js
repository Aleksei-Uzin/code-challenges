/**
 * Difference of Volumes of Cuboids
 * https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript
 * 
 * Solution:
 * https://www.codewars.com/kata/58cb43f4256836ed95000f97/solutions/javascript?filter=me&sort=best_practice&invalids=false
 * 
 */

function findDifference(a, b) {
  const getVolume = (x, y) => x * y

  return Math.abs(a.reduce(getVolume) - b.reduce(getVolume))
}
