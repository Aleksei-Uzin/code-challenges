/**
 * Jumping Number (Special Numbers Series #4)
 * https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed/train/javascript
 *
 */

const jumpingNumber = n => {
  const str = n.toString()

  for (let i = 0; i < str.length - 1; i++) {
    if (Math.abs(Number(str[i]) - Number(str[i + 1])) !== 1) {
      return 'Not!!'
    }
  }

  return 'Jumping!!'
}
