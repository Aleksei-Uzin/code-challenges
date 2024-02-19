/**
 * Regex count lowercase letters
 * https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript
 *
 */

function lowercaseCount(str){
  const arr = str.match(/[a-z]/g)

  return (Array.isArray(arr)) ? arr.length : 0
}
