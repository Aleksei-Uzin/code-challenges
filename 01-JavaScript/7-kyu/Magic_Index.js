/**
 * Magic Index
 * https://www.codewars.com/kata/57d5fed61a6282bf6f002a5f/train/javascript
 *
 */

function findMagic(arr){
  return arr.find((x, i) => x === i) || -1
}
