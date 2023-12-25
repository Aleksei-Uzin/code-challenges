/**
 * Array intersect all
 * https://www.codewars.com/kata/52a4e42ce950ed50da000748/train/javascript
 *
 */

const intersect = (arr = [], ...rest) => {
  const res = []

  for (let i = 0; i < arr.length; i++) {
    const includes = rest.every(item => item.includes(arr[i]))

    if (includes) res.push(arr[i])
  }

  return res
}
