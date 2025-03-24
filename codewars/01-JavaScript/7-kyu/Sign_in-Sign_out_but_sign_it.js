/**
 * Sign in/Sign out but sign it
 * https://www.codewars.com/kata/543da2dd23ccbd1fb600048e/train/javascript
 *
 */

const sign = num => {
  num = Number(num)

  if (num === 0) return 0
  else if (num < 0) return -1
  else if (num > 0) return 1
  else return NaN
}
