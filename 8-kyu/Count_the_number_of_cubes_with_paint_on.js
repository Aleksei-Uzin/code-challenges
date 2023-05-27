/**
 * Count the number of cubes with paint on
 * https://www.codewars.com/kata/5763bb0af716cad8fb000580/train/javascript
 * 
 * https://math.stackexchange.com/questions/1874787/puzzle-find-number-of-cubes-with-1-red-face
 *
 */

function countSquares(c){
  return c ? Math.pow(c, 2) * 6 + 2 : 1
}
