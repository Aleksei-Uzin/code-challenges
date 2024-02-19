/**
 * Balanced Number (Special Numbers Series #1)
 * https://www.codewars.com/kata/5a4e3782880385ba68000018/train/javascript
 *
 */

const balancedNum = number => {
  if (number < 100) return 'Balanced'

  const str = number.toString()
  const len = str.length
  let left = 0
  let right = 0

  for (let i = 0; i < Math.floor((len - 1) / 2); i++) {
    left += Number(str[i])
    right += Number(str[len - 1 - i])
  }

  return left === right ? 'Balanced' : 'Not Balanced'
}
