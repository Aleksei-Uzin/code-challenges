/**
 * Sum ALL the arrays!
 * https://www.codewars.com/kata/5594463eaf1701909c0000d4/train/javascript
 *
 */

const arraySum = arr => {
  if (arr.length === 0) return 0

  const val = arr.pop()
  const num = typeof val === 'number' ? val : 0

  return Array.isArray(val)
    ? arraySum(arr) + arraySum(val)
    : arraySum(arr) + num
}
