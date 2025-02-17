/**
 * Adding values of arrays in a shifted way
 * https://www.codewars.com/kata/57c7231c484cf9e6ac000090/train/javascript
 *
 */

const addingShifted = (arr, shift) => {
  const res = [...arr[0]]

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      const ind = i * shift + j
      if (res[ind]) res[ind] += arr[i][j]
      else res[ind] = arr[i][j]
    }
  }

  return res
}
