/**
 * Parse float
 * https://www.codewars.com/kata/57a386117cb1f31890000039/train/javascript
 *
 */

const parseF = str => {
  const res = parseFloat(str)
  
  return !Number.isNaN(res) ? res : null
}
