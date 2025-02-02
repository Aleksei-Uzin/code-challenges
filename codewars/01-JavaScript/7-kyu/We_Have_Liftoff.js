/**
 * We Have Liftoff
 * https://www.codewars.com/kata/53d6387b83db278202000802/train/javascript
 *
 */

const liftoff = instructions => {
  const arr = instructions.sort((a, b) => b - a)
  return `${arr.join(' ')} liftoff!`
}
