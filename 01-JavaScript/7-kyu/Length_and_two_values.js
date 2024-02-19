/**
 * Length and two values.
 * https://www.codewars.com/kata/62a611067274990047f431a8/train/javascript
 *
 */

const alternate = (n, first, second) => {
  const arr = []
  
  for(let i = 0; i < n; i++) {
    if(i % 2 === 0) {
      arr.push(first)
      continue
    }
    
    arr.push(second)
  }
  
  return arr
}
