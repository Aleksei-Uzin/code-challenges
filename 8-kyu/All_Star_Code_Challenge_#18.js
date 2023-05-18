/**
 * All Star Code Challenge #18
 * https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
 *
 */

function strCount(str, letter){  
  let count = 0
  let pos = str.indexOf(letter)

  while (pos !== -1) {
    pos = str.indexOf(letter, pos + 1)
    count++
  }
  
  return count
}
