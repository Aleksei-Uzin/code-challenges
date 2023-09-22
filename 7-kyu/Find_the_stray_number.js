/**
 * Find the stray number
 * https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
 *
 */

const stray = numbers => {
  const [n1, n2, ...rest] = numbers.sort()
  
  return n1 !== n2 ? n1 : rest.at(-1)
}
