/**
 * Find the index of the second occurrence of a letter in a string
 * https://www.codewars.com/kata/63f96036b15a210058300ca9/train/javascript
 *
 */

const secondSymbol = (s, symbol) => {
  const index = s.indexOf(symbol)

  return s.indexOf(symbol, index + 1)
}
