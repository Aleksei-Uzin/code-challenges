/**
 * Fruit string calculator
 * https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3/train/javascript
 *
 */

const calculate = str => {
  const [n1, n2] = str.match(/\d+/g).map(Number)

  return /loses/.test(str) ? n1 - n2 : n1 + n2
}
