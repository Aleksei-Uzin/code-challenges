/**
 * Product of Largest Pair
 * https://www.codewars.com/kata/5784c89be5553370e000061b/train/javascript
 *
 */

const maxProduct = arr => {
  const len = arr.length
  let max1 = arr[0]
  let max2 = arr[1]
  
  for(let i = 1; i < len; i++) {
    if(arr[i] > max1) max1 = arr[i]
  }

  for(let i = 2; i < len; i++) {
    if(arr[i] > max2 && arr[i] < max1) max2 = arr[i]
  }
  
  return max1 * max2
}
