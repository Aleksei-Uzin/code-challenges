/**
 * Sort with a sorting array
 * https://www.codewars.com/kata/59dc8288fc3c49cc3f000039/train/javascript
 *
 */

const sort = (initialArray, sortingArray) => {
  const res = []
  
  sortingArray.forEach((n, i) => {
    res[n] = initialArray[i]
  })
  
  return res
}
