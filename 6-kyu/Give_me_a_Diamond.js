/**
 * Give me a Diamond
 * https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript
 *
 */

const diamond = n => {
  const createRow = (s, c) => ' '.repeat(s) + '*'.repeat(c) + '\n'
  const part = Math.floor(n / 2)
  const arr = []
  
  if(n < 0 || !(n % 2)) return null
  
  for(let i = 0, r = 1; i < part; i++, r += 2) {
    arr.push(createRow(part - i, r))
  }
  
  return [...arr, createRow(0, n), ...arr.reverse()].join('')
}
