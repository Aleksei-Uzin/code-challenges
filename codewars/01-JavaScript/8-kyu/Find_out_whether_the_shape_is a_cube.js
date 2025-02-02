/**
 * Find out whether the shape is a cube
 * https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript
 *
 */

const cubeChecker = (volume, side) => {
  if(volume <= 0 || side <= 0) return false
  
  return volume === Math.pow(side, 3)
}
