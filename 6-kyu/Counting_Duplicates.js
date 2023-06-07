/**
 * Counting Duplicates
 * https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
 *
 */

const duplicateCount = str => {
  const arrStr = [...str.toLowerCase()]
  const result = []

  arrStr.forEach((x, i, arr) => {
    if(arr.indexOf(x) !== i && !result.includes(x)) result.push(x)
  })

  return result.length
}
