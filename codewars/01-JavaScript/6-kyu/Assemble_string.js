/**
 * Assemble string
 * https://www.codewars.com/kata/6210fb7aabf047000f3a3ad6/train/javascript
 *
 */

const assembleString = arr => {
  if (!arr.length) return ''

  let res = Array.from({ length: arr[0].length }, _ => '#')

  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const char = arr[j][i]
      if (char !== '*') res[i] = char
    }
  }

  return res.join('')
}
