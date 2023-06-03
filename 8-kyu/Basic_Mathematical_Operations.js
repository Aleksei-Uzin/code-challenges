/**
 * Basic Mathematical Operations
 * https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
 *
 */

const basicOp = (operation, val1, val2) => {
  switch(operation) {
    case '+':
      return val1 + val2
    case '-':
      return val1 - val2
    case '*':
      return val1 * val2
    default:
      return val1 / val2
  }
}
