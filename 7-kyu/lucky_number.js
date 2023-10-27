/**
 * lucky number
 * https://www.codewars.com/kata/55afed09237df73343000042/train/javascript
 *
 */

const isLucky = n => {
  const sum = n
    .toString()
    .split('')
    .reduce((acc, val) => acc + +val, 0)

  return sum === 0 || sum % 9 === 0
}
