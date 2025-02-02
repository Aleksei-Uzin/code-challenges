/**
 * Get the Middle Character
 * https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
 *
 */

const getMiddle = s => {
  const len = s.length

  return len % 2 === 0
    ? s.slice(len / 2 - 1, len / 2 + 1)
    : s.at(Math.floor(len / 2))
}
