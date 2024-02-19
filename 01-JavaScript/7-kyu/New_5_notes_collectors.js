/**
 * New £5 notes collectors!
 * https://www.codewars.com/kata/58029cc9af749f80e3001e34/train/javascript
 *
 */

const getNewNotes = (salary, bills) => {
  const remainder = bills.reduce((acc, val) => acc - val, salary)
  return remainder > 0 ? ~~(remainder / 5) : 0
}
