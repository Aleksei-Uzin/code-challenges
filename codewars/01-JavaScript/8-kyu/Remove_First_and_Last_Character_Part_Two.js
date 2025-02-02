/**
 * Remove First and Last Character Part Two
 * https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript
 *
 */

function array(str) {
  const arr = str.split(',').slice(1, -1)
  
  return arr.length ? arr.join(' ') : null
}
