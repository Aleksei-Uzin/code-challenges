/**
 * Comfortable words
 * https://www.codewars.com/kata/56684677dc75e3de2500002b/train/javascript
 *
 */

const comfortableWord = word => {
  const left = 'qwertasdfgzxcvb'
  const right = 'yuiophjklnm'
  let queue = ''

  for (let c of word) {
    switch (queue) {
      case 'left':
        if (!right.includes(c)) return false
        queue = 'right'
        continue
      case 'right':
        if (!left.includes(c)) return false
        queue = 'left'
        continue
      default:
        queue = left.includes(c) ? 'left' : 'right'
    }
  }

  return true
}
