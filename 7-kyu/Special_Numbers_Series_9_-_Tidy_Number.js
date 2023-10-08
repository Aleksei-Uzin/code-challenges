/**
 * Tidy Number (Special Numbers Series #9)
 * https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript
 *
 */

const tidyNumber = n => {
  const arr = n.toString().split('')

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }

  return true
}
