/**
 * Lost number in number sequence
 * https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript
 *
 */

const findDeletedNumber = (arr, mixArr) => {
  for (let n of arr) {
    if (!mixArr.includes(n)) return n
  }

  return 0
}
