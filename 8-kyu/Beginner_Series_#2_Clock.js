/**
 * Beginner Series #2 Clock
 * https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
 *
 */

function past(h, m, s){
  const msPerM = m * 60
  const msPerH = h * 60 * 60
  
  return (s + msPerM + msPerH) * 1000
}
