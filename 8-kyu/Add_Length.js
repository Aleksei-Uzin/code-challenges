/**
 * Add Length
 * https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
 *
 */

function addLength(str) {
  const arr = str.split(' ')
  
  arr.forEach((x, i, arr) => {
    arr[i] = `${x} ${x.length}`
  })
  
  return arr
}

// Best Practice
//
// function addLength(str){
//   return str.split(" ").map(s => `${s} ${s.length}`)
// }
