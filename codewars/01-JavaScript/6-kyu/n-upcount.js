/**
 * n-upcount
 * https://www.codewars.com/kata/599fd6d49f922bdfa200009c/train/javascript
 *
 */

const nUpCount = (arr, n) => {
  let sum = 0
  let res = 0

  for (let i = 0; i < arr.length; i++) {
    const temp = sum
    sum += arr[i]
    if (temp <= n && sum > n) {
      res++
    }
  }

  return res
}
