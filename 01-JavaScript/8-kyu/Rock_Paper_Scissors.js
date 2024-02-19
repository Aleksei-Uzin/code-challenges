/**
 * Rock Paper Scissors!
 * https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
 *
 */

const rps = (p1, p2) => {
  let res = 1

  if(p1 === p2) return 'Draw!'
  
  if(p1 === 'paper' && p2 === 'scissors') res = 2
  if(p1 === 'rock' && p2 === 'paper') res = 2
  if(p1 === 'scissors' && p2 === 'rock') res = 2
  
  return `Player ${res} won!`
}
