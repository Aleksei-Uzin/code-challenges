/**
 * Merging sorted integer arrays (without duplicates)
 * https://www.codewars.com/kata/573f5c61e7752709df0005d2/train/javascript
 *
 */

const mergeArrays = (a, b) => {
  const arr = a.concat(b).sort((n1, n2) => n1 - n2)

  return [...new Set(arr)]
}
