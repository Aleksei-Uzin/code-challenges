/**
 * Recursion: An introduction
 * https://www.codewars.com/kata/577ff873d648a1c5a9000143/train/javascript
 *
 */

const stepDown = (stair, width) => {
  const output = [];
  
  function getStairs(stair) {
    if(stair < 0) return
    
    output.push(stair)
    
    getStairs(stair -= width)
  }

  getStairs(stair)
  
  return output.reverse()
}
