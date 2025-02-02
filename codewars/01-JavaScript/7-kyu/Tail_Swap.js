/**
 * Tail Swap
 * https://www.codewars.com/kata/5868812b15f0057e05000001/train/javascript
 *
 */

const tailSwap = ([a, b]) => {
  const [a1, a2] = a.split(':')
  const [b1, b2] = b.split(':')

  return [`${a1}:${b2}`, `${b1}:${a2}`]
}
