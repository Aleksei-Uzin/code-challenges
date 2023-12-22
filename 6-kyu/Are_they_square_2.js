/**
 * Are they square 2?
 * https://www.codewars.com/kata/5697a0d35f754d1592000018/train/javascript
 *
 */

const isSquare = arr => {
  if (arr.length === 0) return

  for (let item of arr) {
    if (typeof item === 'number' && !Number.isInteger(Math.sqrt(item)))
      return false
    else if (Array.isArray(item) && item.length > 0 && !isSquare(item))
      return false
  }

  return true
}
