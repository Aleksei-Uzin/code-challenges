/**
 * Pair Zeros
 * https://www.codewars.com/kata/54e2213f13d73eb9de0006d2/train/javascript
 *
 */

function pairZeros(arr) {
  const res = []
  let n = 0

  arr.forEach((x, i) => {
    if(x === 0) n++

    if(x === 0 && !(n % 2)) return

    res[i] = x
  })

  return res.filter(x => true)
}

// Best Practice:
//
// function pairZeros(arr) {
//   var seenZero = 0
//
//   return arr.filter(x => x != 0 || seenZero++ % 2 == 0)
// }

// Clever:
//
// function pairZeors(arr) {
//   var flag = false
//
//   return arr.filter(x => x || (flag =! flag))
// }
