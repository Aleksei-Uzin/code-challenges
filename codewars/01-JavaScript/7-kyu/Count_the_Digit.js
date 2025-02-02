/**
 * Count the Digit
 * https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript
 *
 */

const nbDig = (n, d) => {
  let str = ''

  while (n >= 0) {
    str += n ** 2
    n--
  }

  return str.match(new RegExp(d, 'g')).length
}
