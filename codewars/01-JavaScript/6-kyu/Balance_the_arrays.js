/**
 * Balance the arrays
 * https://www.codewars.com/kata/58429d526312ce1d940000ee/train/javascript
 *
 */

const balance = (arr1, arr2) => {
  return count(arr1) === count(arr2)

  function count(arr) {
    const obj = {}

    for (let val of arr) {
      if (!obj[val]) obj[val] = 1
      else obj[val] += 1
    }

    return Object.values(obj)
      .sort((a, b) => a - b)
      .join()
  }
}
