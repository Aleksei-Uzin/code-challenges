/**
 * The Span Function
 * https://www.codewars.com/kata/54f2f335cb9d99e8530008d7/train/javascript
 *
 */

function span(arr, predicate) {
  const i = arr.findIndex(x => predicate(x) !== true)
  
  return (
    i < 0
    ? [arr, []]
    : [arr.slice(0, i), arr.slice(i)]
  )
}
