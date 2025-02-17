/**
 * Adding Arrays
 * https://www.codewars.com/kata/59778cb1b061e877c50000cc/train/javascript
 *
 */

const arrAdder = arr => {
  let res = ''

  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      res += arr[j][i] || ''
    }

    res += ' '
  }

  return res.trimEnd()
}
