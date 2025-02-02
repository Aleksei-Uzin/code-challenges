/**
 * Unknown amount of duplicates. One missing number.
 * https://www.codewars.com/kata/5a5cdb07fd56cbdd3c00005b/train/javascript
 *
 */

const findDupsMiss = arr => {
  const sortedCopy = arr.concat().sort((a, b) => a - b)
  const duplicates = []
  const len = sortedCopy.length
  let num = 0

  sortedCopy.forEach((x, i, arr) => {
    const next = arr[i + 1]

    if(x === next && i < len) duplicates.push(x)

    if(x + 1 < next) num = x + 1
  })

  return [num, duplicates]
}
