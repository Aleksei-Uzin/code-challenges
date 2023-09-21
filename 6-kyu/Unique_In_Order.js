/**
 * Unique In Order
 * https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
 *
 */

const uniqueInOrder = iterable => {
  const arr = [...iterable]
  const res = arr[0] ? [arr[0]] : []

  arr.forEach((x, i) => {
    if(arr[i] !== res[res.length - 1]) {
      res.push(x)
    }
  })
  
  return res
}

// Best Practice
//
// var uniqueInOrder=function(iterable){
//   return [...iterable].filter((a, i) => a !== iterable[i-1])
// }
