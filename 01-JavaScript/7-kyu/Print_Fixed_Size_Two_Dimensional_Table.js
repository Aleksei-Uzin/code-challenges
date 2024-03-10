/**
 * Print Fixed Size Two Dimensional Table
 * https://www.codewars.com/kata/56562ee9ae8369e9a6000089/train/javascript
 *
 */

const buildTableText = (row, col, char) => {
  const table = Array(4).fill('---------\n| | | | |\n')
  const reg = new RegExp(`(\\|\\s)(?!\\1{${4 - col}})`)
  table[row] = table[row].replace(reg, `|${char}`)
  return `${table.join('')}---------\n`
}
