/**
 * Pillow on the Fridge
 * https://www.codewars.com/kata/57d147bcc98a521016000320/train/javascript
 *
 */

const pillow = ([setA, setB]) => {
  let ind = -1

  do {
    ind = setA.indexOf('n', ind + 1)
    if (setB[ind] === 'B') return true
  } while (ind !== -1)

  return false
}
