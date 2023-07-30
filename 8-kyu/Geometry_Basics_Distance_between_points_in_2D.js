/**
 * Geometry Basics: Distance between points in 2D
 * https://www.codewars.com/kata/58dced7b702b805b200000be/train/javascript
 *
 */

const distanceBetweenPoints = (a, b) => {
  const {x: x1, y: y1} = a
  const {x: x2, y: y2} = b
  
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
}
