/**
 * How Green Is My Valley?
 * https://www.codewars.com/kata/56e3cd1d93c3d940e50006a4/train/javascript
 *
 */

const makeValley = arr => {
  const sorted = arr.sort((a, b) => b - a)
  const arr1 = []
  const arr2 = []
  
  sorted.forEach((x, i) => {
    i % 2 ? arr2.unshift(x) : arr1.push(x)
  })
  
  return [...arr1, ...arr2]
}
