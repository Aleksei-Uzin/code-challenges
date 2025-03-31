/**
 * Yes No Yes No
 * https://www.codewars.com/kata/573c84bf0addf9568d001299/train/javascript
 *
 */

const yesNo = arr => {
  const len = arr.length
  const res = []
  let ind = 0

  while (arr.length > 0) {
    res.push(arr.splice(ind, 1)[0])
    if (arr.length === 0) break
    ind = (ind + 1) % arr.length
  }

  return res
}
