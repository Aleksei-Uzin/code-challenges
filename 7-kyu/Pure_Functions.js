/**
 * Pure Functions
 * https://www.codewars.com/kata/59bdbe9d46038724ca0000b9/train/javascript
 *
 */

function solution(arr, options) {
  const copy = arr.concat()

  for (let i = 0; i < copy.length; ++i) {
    copy[i] += 2 * options.modifier;
  }
  
  return copy;
}

