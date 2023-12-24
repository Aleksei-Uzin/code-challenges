/**
 * Array Info
 * https://www.codewars.com/kata/57f12b4d5f2f22651c00256d/train/javascript
 *
 */

const arrayInfo = arr => {
  const len = arr.length

  if (len === 0) return 'Nothing in the array!'

  let intNums = null
  let floatNums = null
  let strCount = null
  let spaces = null

  for (let item of arr) {
    if (typeof item === 'number') {
      Number.isInteger(item)
        ? (intNums = (intNums || 0) + 1)
        : (floatNums = (floatNums || 0) + 1)
    } else if (typeof item === 'string') {
      ;/^\s+$/.test(item)
        ? (spaces = (spaces || 0) + 1)
        : (strCount = (strCount || 0) + 1)
    }
  }

  return [[len], [intNums], [floatNums], [strCount], [spaces]]
}
