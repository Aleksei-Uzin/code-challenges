/**
 * Find the calculation type
 * https://www.codewars.com/kata/5aca48db188ab3558e0030fa/train/javascript
 *
 */

const calcType = (a, b, res) => {
  if (a + b === res) return 'addition'
  else if (a - b === res) return 'subtraction'
  else if (a * b === res) return 'multiplication'
  else return 'division'
}
