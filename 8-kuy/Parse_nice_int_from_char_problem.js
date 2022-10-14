/**
 * Parse nice int from char problem
 * https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/javascript
 * 
 * Solution:
 * https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/solutions/javascript?filter=me&sort=best_practice&invalids=false
 * 
 */

function getAge(inputString) {
  const age = +inputString.match(/\d/)[0]

  return age
}
