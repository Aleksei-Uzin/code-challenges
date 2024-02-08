/**
 * Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product
 * https://www.codewars.com/kata/57fb142297e0860073000064/train/javascript
 *
 */

const product = str => {
  const a = str.replace(/[^\!]/g, '').length
  const b = str.replace(/[^\?]/g, '').length

  return a * b
}
