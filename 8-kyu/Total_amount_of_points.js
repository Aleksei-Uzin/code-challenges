/**
 * Total amount of points
 * https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
 *
 */

function points(games) {
  let sum = 0
  
  games.forEach(score => {
    const [x, y] = score.split(':')
    
    if(x > y) sum += 3
    
    if(x === y) sum += 1
  })
  
  return sum
}
