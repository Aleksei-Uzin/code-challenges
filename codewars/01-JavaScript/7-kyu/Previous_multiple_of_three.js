/**
 * Previous multiple of three
 * https://www.codewars.com/kata/61123a6f2446320021db987d/train/javascript
 *
 */

const prevMultOfThree = n => {
  if (n === 0) return null
  if (n % 3 === 0) return n

  return prevMultOfThree(~~(n / 10))
}
