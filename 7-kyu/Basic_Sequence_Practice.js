/**
 * Basic Sequence Practice
 * https://www.codewars.com/kata/5436f26c4e3d6c40e5000282/train/javascript
 *
 */

const sumOfN = n => {
  const arr = []
  let sum = 0

  if (n > 0) {
    for (let i = 0; i <= n; i++) {
      sum += i
      arr.push(sum)
    }
  } else {
    for (let i = 0; i >= n; i--) {
      sum += i
      arr.push(sum)
    }
  }

  return arr
}
