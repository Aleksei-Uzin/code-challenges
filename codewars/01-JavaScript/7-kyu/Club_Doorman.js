/**
 * Club Doorman
 * https://www.codewars.com/kata/5c563cb78dac1951c2d60f01/train/javascript
 *
 */

const passTheDoorMan = word => {
  const [pair] = word.match(/(\w)\1/)
  return (pair.charCodeAt(0) % 96) * 3
}
