/**
 * The dropWhile Function
 * https://www.codewars.com/kata/54f9c37106098647f400080a/train/javascript
 *
 */

function dropWhile(arr, pred) {
  const i = arr.findIndex(x => !pred(x))

  return i >= 0 ? arr.slice(i) : []
}
