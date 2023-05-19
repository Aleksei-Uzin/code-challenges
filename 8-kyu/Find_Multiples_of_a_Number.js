/**
 * Find Multiples of a Number
 * https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
 *
 */

function findMultiples(integer, limit) {
  const len = Math.floor(limit / integer)
  const arr = new Array(len)
  
  for(let i = 0; i < len; i++) {
    i ? arr[i] = integer * (i + 1) : arr[i] = integer
  }
  
  return arr
}

// Best Practice
//
// function findMultiples(int,limit){
//   let result = []
//
//   for (let i = int; i<=limit ; i+=int)
//     result.push(i)
//
//   return result
// }
