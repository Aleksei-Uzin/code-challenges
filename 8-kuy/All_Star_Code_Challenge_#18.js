/**
 * All Star Code Challenge #18
 * https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
 * 
 * Solution:
 * https://www.codewars.com/kata/reviews/58672f1f50d0bb97a60008bb/groups/63472fb71bba0a0001535292
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
