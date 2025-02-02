/**
 * Finding length of the sequence
 * https://www.codewars.com/kata/5566b0dd450172dfc4000005/train/javascript
 *
 */

const lengthOfSequence = (arr, n) => {
  const count = arr.filter(val => val === n)

  if (count.length !== 2) return 0
  if (arr.length === 2) return 2

  return arr.lastIndexOf(n) - arr.indexOf(n) + 1
}
