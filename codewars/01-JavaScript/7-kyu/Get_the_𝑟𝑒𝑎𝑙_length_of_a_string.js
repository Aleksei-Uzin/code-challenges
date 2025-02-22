/**
 * Get the 𝑟𝑒𝑎𝑙 length of a string
 * https://www.codewars.com/kata/599c4b69eb8e49effa000079/train/javascript
 *
 */

const getRealLength = str => {
  let res = 0

  for (let s of str) res++

  return res
}
