/**
 * Sum a list but ignore any duplicates
 * https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2/train/javascript
 *
 */

const sumNoDuplicates = numList =>
  numList.reduce(
    (acc, n) => (numList.indexOf(n) === numList.lastIndexOf(n) ? acc + n : acc),
    0
  )
