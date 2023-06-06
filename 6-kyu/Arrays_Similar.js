/**
 * Arrays Similar
 * https://www.codewars.com/kata/51e704f2d8dbace389000279/train/javascript
 *
 */

const arraysSimilar = (arr1, arr2) => {
  const sorting = (a, b) => a - b
  const len1 = arr1.length
  const len2 = arr2.length
  
  if(len1 !== len2) return false
  
  const sortedArr1 = arr1.sort(sorting)  
  const sortedArr2 = arr2.sort(sorting)
  let isSimilar = true
  
  for(let i = 0; i < len1; i++) {
    if(sortedArr1[i] !== sortedArr2[i]) isSimilar = false
  }
  
  return isSimilar
}
