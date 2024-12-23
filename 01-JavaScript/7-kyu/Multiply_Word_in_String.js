/**
 * Multiply Word in String
 * https://www.codewars.com/kata/5ace2d9f307eb29430000092/train/javascript
 *
 */

const modifyMultiply = (str, loc, num) => {
  const locStr = str.split(' ')[loc]
  const res = Array.from({ length: num }).fill(locStr)

  return res.join('-')
}
