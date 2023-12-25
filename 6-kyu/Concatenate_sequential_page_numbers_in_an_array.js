/**
 * Concatenate sequential page numbers in an array
 * https://www.codewars.com/kata/57d83dfc950d842dcb00005b/train/javascript
 *
 */

const paginate = arr => {
  arr.sort((a, b) => a - b)
  const res = []

  for (let i = 0; i < arr.length; i++) {
    const a = arr[i]
    const b = arr[i + 1]

    if (b - a === 1) {
      let str = `${a}-`
      for (let j = i; j < arr.length; j++, i++) {
        if (arr[j + 1] - arr[j] !== 1) {
          str = str.concat(arr[j])
          break
        }
      }
      res.push(str)
    } else {
      res.push(a)
    }
  }

  return res.join(', ')
}
