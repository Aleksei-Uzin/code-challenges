/**
 * esreveR
 * https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript
 *
 */

function reverse(arr) {
  const res = []
  let i = arr.length - 1

  for(i; i >= 0; i--) {
    res.push(arr[i])
  }

  return res
}
