/**
 * Not all but sometimes all
 * https://www.codewars.com/kata/564ab935de55a747d7000040/train/javascript
 *
 */

const remove = (str, what) => {
  const keys = Object.keys(what)

  for (let val of keys) {
    while (str.includes(val) && what[val] > 0) {
      str = str.replace(val, '')
      what[val] -= 1
    }
  }

  return str
}

// Best practice
//
// function remove(str, what) {
//   return str.replace(/[a-z]/g, c => (what[c]-- > 0 ? '' : c))
// }
