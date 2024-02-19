/**
 * Are they the "same"?
 * https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
 *
 */

// A
const comp = (arr1, arr2) => {
  if(!arr1 || !arr2) return false

  const sorting = (a, b) => a - b
  const arr1Sorted = arr1.sort(sorting)
  const arr2Sorted = arr2.sort(sorting)
  const arr1SortedPow = arr1Sorted.map(elem => elem ** 2)

  return arr1SortedPow.every((elem, i) => elem === arr2Sorted[i])
}

// B
const _comp = (arr1, arr2) => {
  const sorting = (a, b) => a - b
  let res = false
  
  if(!arr1 || !arr2) return res

  if(!arr1.length || !arr2.length) return true
  
  const arr1Sorted = arr1.sort(sorting)
  const arr2Sorted = arr2.sort(sorting)
  const len = arr2Sorted.length

  for(let i = 0; i < len; i++) {
    const result = Math.sqrt(arr2Sorted[i])
    
    if(result === arr1Sorted[i]) {
      res = true
    } else {
      res = false
      break
    }
  }
  
  return res
}
