/**
 * Multiplication table
 * https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
 *
 */

const multiplicationTable = size => {
  const table = []
  
  for(let i = 1; i <= size; i++) {
    const row = new Array(size).fill(1).map((_, k) => (k + 1) * i)
    
    size > 1 ? table.push(row) : table.push([i])
  }
  
  return table
}
