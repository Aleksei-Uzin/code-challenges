/**
 * Number climber
 * https://www.codewars.com/kata/559760bae64c31556c00006b/train/javascript
 *
 */

const climb = n => {
  const arr = []

  while (n >= 1) {
    arr.unshift(n)
    n = n % 2 === 0 ? n / 2 : (n - 1) / 2
  }

  return arr
}
