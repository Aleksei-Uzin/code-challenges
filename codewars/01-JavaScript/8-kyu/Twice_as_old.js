/**
 * Twice as old
 * https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
 *
 */

function twiceAsOld(dadYearsOld, sonYearsOld) {
  const yearsAgo = dadYearsOld - sonYearsOld * 2
  
  if(yearsAgo > 0) return yearsAgo
  
  if(yearsAgo < 0) return -yearsAgo
  
  return 0
}

// Best Practice
//
// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - 2 * sonYearsOld)
// }
