/**
 * Training JS #33: methods of Math---max() min() and abs()
 * https://www.codewars.com/kata/5733d6c2d780e20173000baa/train/javascript
 *
 */

const maxMin = (arr1, arr2) => {
  const res = arr1.map((val, i) => Math.abs(val - arr2[i]))

  return [Math.max(...res), Math.min(...res)]
}
