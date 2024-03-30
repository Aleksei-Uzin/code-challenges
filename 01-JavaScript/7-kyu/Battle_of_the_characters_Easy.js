/**
 * Battle of the characters (Easy)
 * https://www.codewars.com/kata/595519279be6c575b5000016/train/javascript
 *
 */

const battle = (x, y) => {
  const sumX = sum(x)
  const sumY = sum(y)

  return sumX > sumY ? x : sumX < sumY ? y : 'Tie!'
}
const sum = str =>
  [...str].reduce((acc, val) => acc + (val.charCodeAt() % 64), 0)
