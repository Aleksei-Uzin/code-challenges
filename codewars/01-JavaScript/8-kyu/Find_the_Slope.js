/**
 * Find the Slope
 * https://www.codewars.com/kata/55a75e2d0803fea18f00009d/train/javascript
 *
 */

function slope(points) {
  const [x1, y1, x2, y2] = points
  
  const changeX = x2 - x1
  const changeY = y2 - y1
  
  return changeX !== 0 ? `${changeY / changeX}` : 'undefined'
}

// Best Practice
//
// function slope([ x1, y1, x2, y2 ]) {
//   let slope = (y2 - y1) / (x2 - x1);
//   return Number.isFinite(slope) ? `${slope}` : 'undefined';
// }
