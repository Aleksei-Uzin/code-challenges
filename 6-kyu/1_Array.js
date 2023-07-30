/**
 * +1 Array
 * https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript
 *
 */

const upArray = arr => {
  const len = arr.length
  const last = len - 1
  const isValidArr = arr.every(x => (x >= 0) && (x < 10))
  
  if(!isValidArr || !len) return null
  
  for(let i = last; i >= 0; i--) {
    if(i === 0 && arr[i] === 9) {
      arr[i] = 0
      arr.unshift(1)
      break
    }

    if(arr[i] < 9) {
      arr[i] += 1
      break
    }

    arr[i] = 0
  }
  
  return arr
}
