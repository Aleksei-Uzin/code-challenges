/**
 * Training Time
 * https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/train/javascript
 *
 */

const shuffleIt = (arr, ...rest) => {
  for (let [a, b] of rest) {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }

  return arr
}
