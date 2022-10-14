/**
 * Find the first non-consecutive number
 * https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
 * 
 * Solution:
 * https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/solutions/javascript?filter=me&sort=best_practice&invalids=false
 * https://www.codewars.com/kata/reviews/58f8a3fd6f3e351305001710/groups/6347de57b61138000186c76a
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
