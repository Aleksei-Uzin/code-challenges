/**
 * Training JS #21: Methods of String object--trim() and the string template
 * https://www.codewars.com/kata/5729b103dd8bac11a900119e/train/javascript
 *
 */

const fiveLine = str => {
  const addPiece = piece => (n, nl = '') => `${piece.repeat(n)}${nl}`
  const getLine = addPiece(str.trim())

  let res = ''
  
  for(let i = 1; i <= 5; i++) {
    i < 5 ? res += getLine(i, '\n') : res += getLine(i)
  }
  
  return res
}
