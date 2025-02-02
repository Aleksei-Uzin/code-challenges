/**
 * Array.diff
 * https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
 *
 */

const arrayDiff = (a, b) => {
  const diff = a.slice()

  b.forEach(item => {
    if(diff.includes(item)) {
      diff.forEach((x, j, arr) => {
        if(x === item) delete arr[j]
      })
    }
  })
  
  return diff.filter(() => true)
}

// Best Practice
//
// function array_diff(a, b) {
//   return a.filter(e => !b.includes(e))
// }
