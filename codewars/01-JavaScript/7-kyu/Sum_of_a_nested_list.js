/**
 * Sum of a nested list
 * https://www.codewars.com/kata/5a15a4db06d5b6d33c000018/train/javascript
 *
 */

const sumNested = arr => {
  let sum = 0

  for (let val of arr) {
    if (Array.isArray(val)) sum += sumNested(val)
    else sum += val
  }

  return sum
}
