/**
 * Logical calculator
 * https://www.codewars.com/kata/57096af70dad013aa200007b/train/javascript
 *
 */

function logicalCalc(arr, op) {
  const and = (a, b) => a && b
  const or = (a, b) => a || b
  const xor = (a, b) => a !== b

  switch(op) {
    case 'AND':
      return arr.reduce(and)
    case 'OR':
      return arr.reduce(or)
    default:
      return arr.reduce(xor)
  }
}
