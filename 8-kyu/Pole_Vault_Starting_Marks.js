/**
 * Pole Vault Starting Marks
 * https://www.codewars.com/kata/5786f8404c4709148f0006bf/train/javascript
 *
 */

function startingMark(bodyHeight){
  // Remember: Body height of 1.52 m --> starting mark: 9.45 m
  //           Body height of 1.83 m --> starting mark: 10.67 m
  // All other starting marks are based on these guidelines!
  
  const c = (10.67 - 9.45) / (1.83 - 1.52)
  
  return +(c * bodyHeight - c * 1.52 + 9.45).toFixed(2)
}
