/**
 * Who ate the cookie?
 * https://www.codewars.com/kata/55a996e0e8520afab9000055/train/javascript
 *
 */

const cookie = x => {
  let chef = 'the dog'
  
  if(typeof x === 'string') chef = 'Zach'
  
  if(typeof x === 'number') chef = 'Monica'
  
  return `Who ate the last cookie? It was ${chef}!`
}
