/**
 * Opposites Attract
 * https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
 *
 */

function lovefunc(flower1, flower2){
  return Math.abs(flower1 - flower2) % 2 > 0 ? true : false
}

// Best Practice
//
// function lovefunc(flower1, flower2){
//   return flower1 % 2 !== flower2 % 2;
// }
