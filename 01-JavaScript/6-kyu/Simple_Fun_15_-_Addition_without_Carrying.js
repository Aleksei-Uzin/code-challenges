/**
 * Simple Fun #15: Addition without Carrying
 * https://www.codewars.com/kata/588468f3b3d02cf67b0005cd/train/javascript
 *
 */

const additionWithoutCarrying = (a, b) => {
  const strA = a.toString()
  const strB = b.toString()
  const lenA = strA.length
  const lenB = strB.length
  const maxLen = lenA > lenB ? lenA : lenB
  let res = ''

  for (let i = 0; i < maxLen; i++) {
    const m = +strA[lenA - i - 1] || 0
    const n = +strB[lenB - i - 1] || 0
    res = `${(m + n).toString().slice(-1)}${res}`
  }

  return +res
}
