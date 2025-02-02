/**
 * Working with arrays I (and why your code fails in some katas)
 * https://www.codewars.com/kata/5a4ff3c5fd56cbaf9800003e/train/javascript
 *
 */

function withoutLast(arr) {
  const copyArr = arr.slice()
  copyArr.pop()
  return copyArr
}
