/**
 * The takeWhile Function
 * https://www.codewars.com/kata/54f9173aa58bce9031001548/train/javascript
 *
 */

function takeWhile (arr, pred) {
  const i = arr.findIndex(x => !pred(x))

  return i >= 0 ? arr.slice(0, i) : arr
}
