/**
 * Array Mash
 * https://www.codewars.com/kata/582642b1083e12521f0000da/train/javascript
 *
 */

const arrayMash = (arr1, arr2) => {
  const res = []

  for (let i = 0; i < arr1.length; i++) {
    res.push(arr1[i], arr2[i])
  }

  return res
}
