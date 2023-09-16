/**
 * Sorted? yes? no? how?
 * https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript
 *
 */

const isSortedAndHow = array => {
  const obj = {
    ascending: (x, i, arr) => !i || arr[i - 1] <= x,
    descending: (x, i, arr) => !i || arr[i - 1] >= x,
  }
  const direction = array[0] < array[array.length - 1] ? 'ascending' : 'descending'

  return array.every(obj[direction]) ? `yes, ${direction}` : 'no'
}
