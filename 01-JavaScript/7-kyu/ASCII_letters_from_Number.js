/**
 * ASCII letters from Number
 * https://www.codewars.com/kata/589ebcb9926baae92e000001/train/javascript
 *
 */

const convert = number => {
  if (number.length === 0) return ''

  const code = number.slice(0, 2)

  return String.fromCharCode(code) + convert(number.replace(/../, ''))
}

// Best Practice
//
// function convert(number) {
//   return String.fromCharCode(...number.match(/../g))
// }
