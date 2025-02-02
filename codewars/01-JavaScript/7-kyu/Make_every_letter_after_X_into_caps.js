/**
 * Make every letter after X into caps.
 * https://www.codewars.com/kata/596a5e32634dad2a3c00003f/train/javascript
 *
 */

const makeEveryLetterAfterXCaps = (str, l) => {
  const reg = new RegExp(`(${l})([a-z])`, 'g')

  while (reg.test(str)) {
    str = str.replace(reg, (_, n1, n2) => n1 + n2.toUpperCase())
  }

  return str
}
