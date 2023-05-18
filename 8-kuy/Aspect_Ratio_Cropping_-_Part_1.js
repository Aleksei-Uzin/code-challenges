/**
 * Aspect Ratio Cropping - Part 1
 * https://www.codewars.com/kata/596e4ef7b61e25981200009f/train/javascript
 * 
 */

function aspectRatio(x,y){
  return [Math.ceil(y * (16 / 9)), y]
}
