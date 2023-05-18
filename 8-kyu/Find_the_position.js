/**
 * Find the position!
 * https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript
 * 
 */

function position(letter){
  const abc = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ]
  const char = letter.toLowerCase()
  const position = abc.indexOf(char) + 1
  
  return `Position of alphabet: ${position}`
}