/**
 * Celebrity Baby Names
 * https://www.codewars.com/kata/577d5ce442a8d81e790002b2/train/javascript
 *
 */

const validName = arr => {
  if (arr.length === 0) return 'You must test at least one name.'
  if (arr.length === 1)
    return 'Congratulations, you can choose any name you like!'

  const llt = arr.map(name => name.slice(0, 1) + name.slice(-1))
  const lltStr = llt.join('').slice(1, -1)

  return /^((\w)\2)+$/gi.test(lltStr)
    ? 'Congratulations, your baby names are compatible!'
    : 'Back to the drawing board, your baby names are not compatible.'
}
