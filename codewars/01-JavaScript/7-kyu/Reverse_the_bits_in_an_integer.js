/**
 * Reverse the bits in an integer
 * https://www.codewars.com/kata/5959ec605595565f5c00002b/train/javascript
 *
 */

const reverseBits = n => {
  const binary = n.toString(2)
  const reverse = binary.split('').reverse().join('')

  return Number.parseInt(reverse, 2)
}
