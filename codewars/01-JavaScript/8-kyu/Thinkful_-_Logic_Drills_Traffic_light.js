/**
 * Thinkful - Logic Drills: Traffic light
 * https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript
 *
 */

function updateLight(current) {
  if(current === 'green') return 'yellow'
  
  if(current === 'yellow') return 'red'
  
  return 'green'
}
