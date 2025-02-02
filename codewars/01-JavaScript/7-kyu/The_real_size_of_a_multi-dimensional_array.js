/**
 * The real size of a multi-dimensional array
 * https://www.codewars.com/kata/57f032307b45ef9c8f0001dd/train/javascript
 *
 */

const realSize = (arr, n = 0) => {
  for (let item of arr) {
    if (typeof item === 'number') n += 1
    else n += realSize(item)
  }

  return n
}
