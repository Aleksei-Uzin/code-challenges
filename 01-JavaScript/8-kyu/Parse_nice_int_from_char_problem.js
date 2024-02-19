/**
 * Parse nice int from char problem
 * https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/javascript
 * 
 */

function getAge(inputString) {
  const age = +inputString.match(/\d/)[0]

  return age
}
