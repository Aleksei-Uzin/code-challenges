/**
 * Battle of the characters (Medium)
 * https://www.codewars.com/kata/595e9f258b763bc2d2000032/train/javascript
 *
 */

const battle = (x, y) => {
  const sumX = sum(x)
  const sumY = sum(y)

  return sumX > sumY ? x : sumX < sumY ? y : 'Tie!'
}
const sum = str =>
  [...str].reduce((acc, val) => {
    const code = val.charCodeAt()
    return code < 97 ? acc + (code % 64) : acc + (code % 96) / 2
  }, 0)
