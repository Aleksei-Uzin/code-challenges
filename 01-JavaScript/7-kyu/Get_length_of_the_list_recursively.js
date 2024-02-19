/**
 * Get length of the list recursively
 * https://www.codewars.com/kata/57a83e447cb1f32de80000d5/train/javascript
 *
 */

const lenR = (x, len = 0) => {
  const copy = [...x]

  return copy.pop() !== undefined ? lenR(copy, len + 1) : len
}
