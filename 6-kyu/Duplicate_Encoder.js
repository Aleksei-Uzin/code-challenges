/**
 * Duplicate Encoder
 * https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
 *
 */

const duplicateEncode = word => {
  const lowerStr = word.toLowerCase()
  let res = ''

  for (let char of lowerStr) {
    if (lowerStr.indexOf(char) !== lowerStr.lastIndexOf(char)) res += ')'
    else res += '('
  }

  return res
}
