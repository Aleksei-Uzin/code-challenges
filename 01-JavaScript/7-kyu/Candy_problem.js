/**
 * Candy problem
 * https://www.codewars.com/kata/55466644b5d240d1d70000ba/train/javascript
 *
 */

const candies = kids => {
  if (kids.length < 2) return -1

  const max = Math.max(...kids)

  return kids.reduce((acc, n) => acc + (max - n), 0)
}
