/**
 * Coding 3min : Symmetric Sort
 * https://www.codewars.com/kata/5705aeb041e5befba20010ba/train/javascript
 *
 */

const sc = arr => {
  const sorted = arr.sort((a, b) => a - b)
  const partA = []
  const partB = []

  for (let i = 0; i < arr.length; i++) {
    i % 2 ? partB.unshift(arr[i]) : partA.push(arr[i])
  }

  return partA.concat(partB)
}
