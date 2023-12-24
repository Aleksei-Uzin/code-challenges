/**
 * Second largest in Array
 * https://www.codewars.com/kata/578fe7e2149935740f000525/train/javascript
 *
 */

const secondLargest = arr => {
  if (!Array.isArray(arr)) return

  const nums = arr.map(n => Number.parseInt(n)).filter(n => !Number.isNaN(n))
  const set = [...new Set(nums)]
  const [_, second] = set.sort((a, b) => b - a)

  return set.length > 1 ? second : undefined
}
