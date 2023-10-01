/**
 * Number-Star ladder
 * https://www.codewars.com/kata/5631213916d70a0979000066/train/javascript
 *
 */

const pattern = n => {
  const output=['1']
 
  for(let i = 2; i <= n; i++) {
    output.push(`1${'*'.repeat(i - 1)}${i}`)
  }
  
  return output.join('\n')
}
