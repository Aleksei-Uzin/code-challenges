/**
 * Find the first non-consecutive number
 * https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
 * 
 */

function firstNonConsecutive(arr) {
  const lastIndex = arr.length - 1
  let ellement = arr[0]
  let index = null

  arr.map((x, i) => {
    if(x === ellement) {
      ellement += 1
      index = i
    }
  })

  return index === lastIndex ? null : arr[index + 1]
}
