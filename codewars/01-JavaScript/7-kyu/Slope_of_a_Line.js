/**
 * Slope of a Line
 * https://www.codewars.com/kata/53222010db0eea35ad000001/train/javascript
 *
 */

const getSlope = ([x1, y1], [x2, y2]) => {
  const res = (y2 - y1) / (x2 - x1)

  return Number.isFinite(res) ? res : null
}
