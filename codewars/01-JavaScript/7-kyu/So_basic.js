/**
 * So basic
 * https://www.codewars.com/kata/563924c7fbc768197d000030/train/javascript
 *
 */

const convertBase20ToDecimal = init => {
  const res = parseInt(init, 20)
  return isNaN(res) ? -1 : res
}
