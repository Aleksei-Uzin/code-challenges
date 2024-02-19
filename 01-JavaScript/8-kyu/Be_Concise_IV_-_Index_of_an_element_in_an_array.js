/**
 * Be Concise IV - Index of an element in an array
 * https://www.codewars.com/kata/5703c093022cd1aae90012c9/train/javascript
 *
 */

const find = (arr, elem) => {
  const i = arr.indexOf(elem)
  
  return i >= 0 ? i : "Not found"
}
