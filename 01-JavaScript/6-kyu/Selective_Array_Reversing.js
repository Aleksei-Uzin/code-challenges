/**
 * Selective Array Reversing
 * https://www.codewars.com/kata/58f6000bc0ec6451960000fd/train/javascript
 *
 */

const selReverse = (arr, amount) => {
  const len = arr.length

  if(!amount) return arr
  
  if(amount > len) return arr.reverse()
  
  const result = []
  
  for(let i = 0; i < len; i += amount) {
    result.push(...arr.slice(i, amount + i).reverse())
  }

  return result
}
