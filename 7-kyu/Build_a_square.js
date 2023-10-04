/**
 * Build a square
 * https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript
 *
 */

const generateShape = n => {
  let res = ''
  
  for(let i = 0; i < n; i++) {
    res += i === n - 1 ? `${'+'.repeat(n)}` : `${'+'.repeat(n)}\n`
  }

  return res
}
