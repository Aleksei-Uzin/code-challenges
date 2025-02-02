/**
 * Product Array (Array Series #5)
 * https://www.codewars.com/kata/5a905c2157c562994900009d/train/javascript
 *
 */

const productArray = numbers => {
  const product = numbers.reduce((acc, val) => acc * val)

  return numbers.map(val => product / val)
}
