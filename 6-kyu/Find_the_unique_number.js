/**
 * Find the unique number
 * https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
 *
 */

const findUniq = arr => {
  const len = arr.length
  let uniq = null
  
  arr.forEach((x) => {
    const result = []
    let pos = 0

    while(pos < len) {
      pos = arr.indexOf(x, pos)
      
      if (pos === -1 || result.length > 1) break

      result.push(pos)
      pos++
    }

    if(result.length === 1) {
      return uniq = arr[result[0]]
    }
  })
  
  return uniq
}
