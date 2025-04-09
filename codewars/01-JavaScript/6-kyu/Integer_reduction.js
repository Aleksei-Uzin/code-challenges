/**
 * Integer reduction
 * https://www.codewars.com/kata/59fd6d2332b8b9955200005f/train/javascript
 *
 */

const solve = (n, k) => {
  const numStr = n.toString()
  const stack = []

  for (let digit of numStr) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
      stack.pop()
      k--
    }
    stack.push(digit)
  }

  return stack.slice(0, stack.length - k).join('')
}
