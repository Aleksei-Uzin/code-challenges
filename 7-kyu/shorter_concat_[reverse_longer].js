/**
 * shorter concat [reverse longer]
 * https://www.codewars.com/kata/54557d61126a00423b000a45/train/javascript
 *
 */

const shorter_reverse_longer = (a, b) => {
  const reverse = str => str.split('').reverse().join('')
  const lenA = a.length
  const lenB = b.length

  return (lenA > lenB || lenA === lenB) ? `${b}${reverse(a)}${b}` : `${a}${reverse(b)}${a}`
}
