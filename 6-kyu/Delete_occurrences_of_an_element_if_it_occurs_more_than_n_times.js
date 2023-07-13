/**
 * Delete occurrences of an element if it occurs more than n times
 * https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
 *
 */

const deleteNth = (arr, n) => {
  const res = []
  const amount = {}
  
  arr.forEach(x => {
    if(!amount[x]) amount[x] = 1
    else if(amount[x] < n) amount[x] += 1
  })

  arr.forEach(x => {
    if(amount[x] > 0) {
      res.push(x)
      amount[x] -= 1
    }
  })
  
  return res
}

// Best Result
// function deleteNth(arr,x) {
//   var cache = {}
//
//   return arr.filter(function(n) {
//     cache[n] = (cache[n] || 0) + 1
//
//     return cache[n] <= x
//   })
// }
