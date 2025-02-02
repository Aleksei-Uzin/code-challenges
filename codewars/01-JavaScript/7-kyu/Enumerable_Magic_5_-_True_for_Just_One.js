/**
 * Enumerable Magic #5- True for Just One?
 * https://www.codewars.com/kata/54599705cbae2aa60b0011a4/train/javascript
 *
 */

const one = (arr, fun) => {
  let count = 0

  for (let item of arr) {
    if (fun(item)) count += 1
    if (count > 1) return false
  }

  return count === 1
}
