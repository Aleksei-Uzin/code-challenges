/**
 * One down
 * https://www.codewars.com/kata/56419475931903e9d1000087/train/javascript
 *
 */

const oneDown = str => {
  if (typeof str !== 'string') return 'Input is not a string'

  return str.replace(/[a-z]/gi, match => {
    const code = match.codePointAt(0)

    if (code === 97) return 'Z'
    else if (code === 65) return 'z'
    else return String.fromCodePoint(code - 1)
  })
}
