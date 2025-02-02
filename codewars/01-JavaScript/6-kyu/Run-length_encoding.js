/**
 * Run-length encoding
 * https://www.codewars.com/kata/546dba39fa8da224e8000467/train/javascript
 *
 */

const runLengthEncoding = str => {
  const items = str.match(/(.)\1*/g)

  return items ? items.map(item => [item.length, item.slice(0, 1)]) : []
}
