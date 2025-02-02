/**
 * IndexOf Array in Array
 * https://www.codewars.com/kata/5783ef69202c0ee4cb000265/train/javascript
 *
 */

const searchArray = (arrayToSearch, query) => {
  if (!Array.isArray(query) || query.length !== 2)
    throw new Error('Invalid query')

  const [n1, n2] = query
  let index = -1

  arrayToSearch.forEach((arr, i) => {
    if (!Array.isArray(arr) || arr.length !== 2)
      throw new Error('invalid arrayToSearch')

    const [m1, m2] = arr

    if (m1 === n1 && m2 === n2 && index < 0) index = i
  })

  return index
}
