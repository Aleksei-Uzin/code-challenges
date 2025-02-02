/**
 * Sum of a sequence
 * https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript
 *
 */

const sequenceSum = (begin, end, step) => {
  let res = 0

  while(begin <= end) {
    res += begin
    begin += step
  }

  return res
}
