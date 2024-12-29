/**
 * Consecutive letters
 * https://www.codewars.com/kata/5ce6728c939bf80029988b57/train/javascript
 *
 */

const solve = s => {
  const abc = 'abcdefghijklmnopqrstuvwxyz'
  const arr = [...s].sort()

  for (let i = 0; i < arr.length - 1; i++) {
    let prevInd = abc.indexOf(arr[i])
    let currInd = abc.indexOf(arr[i + 1])

    if (prevInd + 1 !== currInd) return false
  }

  return true
}
