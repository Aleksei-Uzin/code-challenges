/**
 * Vowel remover
 * https://www.codewars.com/kata/5547929140907378f9000039/train/javascript
 *
 */

const shortcut = string => {
  const regex = /[^a|e|i|o|u]/ig
  const arr = string.match(regex)
  
  return arr?.join('') ?? ''
}

// Best practice
// function shortcut(string){
//   return string.replace(/[aeiou]/g,'')
// }
