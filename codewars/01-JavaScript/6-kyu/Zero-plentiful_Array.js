/**
 * Zero-plentiful Array
 * https://www.codewars.com/kata/59e270da7997cba3d3000041/train/javascript
 *
 */

const zeroPlentiful = arr => {
  const res = []
  let n = 0

  arr.forEach(x => {
   if (x === 0) {
     res[n] = res[n] ? res[n] + 1 : 1
   } else {
     n = res.length
   }
  })

  const isZeroPlentiful = res.every(count => count >= 4)
  
  return isZeroPlentiful ? res.length : 0
}
