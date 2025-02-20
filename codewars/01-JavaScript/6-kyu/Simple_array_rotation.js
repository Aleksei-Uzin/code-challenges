/**
 * Simple array rotation
 * https://www.codewars.com/kata/5a16cab2c9fc0e09ce000097/train/javascript
 *
 */

const solve = arr => {
  let order = ''
  let n = 0

  for (let i = 1; i < arr.length; i++) {
    const n1 = arr[i - 1]
    const n2 = arr[i]
    n++

    if ((order === 'A' && n1 > n2) || (order === 'D' && n1 < n2)) {
      order = 'R'
      break
    } else {
      if (n1 < n2) order = 'A'
      if (n1 > n2) order = 'D'
    }
  }

  if (order === 'R') {
    const [n1, n2] = arr.slice(n).concat(arr.slice(0, n))
    order += n1 < n2 ? 'A' : 'D'
  }

  return order
}
